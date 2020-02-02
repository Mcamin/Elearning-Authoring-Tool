# Vue.js and Vuex - best practices for managing your state

## Modyfing state object

### Example

If you have to extend an existing object with additional property, always prefer `Vue.set()` over `Object.assign()` (or spread operator).

Example below explains implications for different implementations.

```javascript
const store = new Vuex.Store({
  state: {
    user: {
      id: 1
    }
  },
  getters: {
    getUserId: state => state.user.id,
    getUserName: state => state.user.name
  },
  mutations: {
    setUserName (state, name) {
      // 1st solution:
      // it won't trigger getters at all, more details:
      // https://vuejs.org/v2/guide/reactivity.html#Change-Detection-Caveats
      state.user.name = name

      // 2nd solution:
      // same as "state.user = Object.assign({}, state.user, { name })"
      // it will trigger both getters every time when you call this mutation
      state.user = { ...state.user, name }

      // 3rd solution:
      // it will trigger both getters when you call this mutation for the first time,
      // but if you call it the next time only getUserName() will be triggered
      // Vue.set() will check if property already exists before re-assigning the entire object
      Vue.set(state.user, 'name', name)
    }  
  }
})
```

Ideally, try to initialize your state with all desired fields upfront, so in the example above `state` should be declared in the following way:

```javascript
state: {
  user: {
    id: 1,
    name: null
  }
}
```

### Summary

Be aware that adding a new property to an existing state object can have a significant impact on your application performance. It will trigger all getters based on that object (and potentially computed properties declared inside your componets).

When your application gets bigger over time and your state becomes more complex, try to use [modules](https://vuex.vuejs.org/en/modules.html) for better data encapsulation. So even if you have to add a new property at least it will have an impact only on a single module.

Same rules apply to nested objects and their properties, so prefer flat structure when you are designing your store schema.

## Modyfing state array

### Example

If you have to add a new object to an existing array, always define all potential properties of the object upfront even if you do not know their values at the time.

Check the example below for more details.

```javascript
const store = new Vuex.Store({
  state: {
    users: []
  },
  getters: {
    getUsersNames: state => {
      return state.users.map(user => user.name)
    }
  },
  mutations: {
    addUser (state, name) {
      // 1st solution:
      // it will work as expected and trigger getUsersNames()
      state.users.push({name})

      // 2nd solution
      // even though we are recreating the entire array,
      // it will behave in the same way as first solution
      // more details: https://vuejs.org/v2/guide/list.html#Replacing-an-Array
      state.users = [...state.users, {name}]
    },
    updateUserAvatar (state, index, avatar) {
      // 1st solution:
      // it will properly update an array item, but also it will trigger getUsersNames()
      Vue.set(state.users[index], 'avatar', avatar)

      // 2nd solution:
      // it's going to work only if we modify addUser() function and include avatar property there:
      // "state.users.push({name, avatar: null})"
      // the benefit of this approach is that getUsersNames() won't be triggered
      state.users[index].avatar = avatar
    }
  }
})
```

### Summary

Be aware that adding a new item to an existing state array will always trigger all getters (and computed properties) which are based on that array. Same will happen if you remove the item.

When you add or remove items from an array it's okay to recreate the array entirely - feel free to use latest JavaScript features like spread operator or simply call array's mutation methods like `push()`.

Different rules apply when you update existing object inside an array. First of all, declare all object properties (even with `null` values) before you add it to the array, they will become reactive properties observed by Vue. Avoid adding new properties to the object, it will always trigger all getters that are based on the array. You should modify object properites directly (for example `state.users[0].name = "Test"`) and avoid recreating the entire array for updates.
