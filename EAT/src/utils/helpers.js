/**
 * Check router path
 * @param currentPath
 * @param path
 * @returns {boolean}
 */
export const checkRouter = (currentPath,path) =>{
  return currentPath === path;
};

/**
 *
 * @param {Object} obj  the object to check
 * @returns {boolean|boolean}  true if not empty
 */
export const notEmptyObject = (obj) => {
  return Object.entries(obj).length!==0 && obj.constructor === Object;
};


/**
 * Function to sort alphabetically an array of objects by some specific key.
 *
 * @param {String} property Key of the object to sort.
 * @returns {Array}  sorted array alphabetically
 */
export const dynamicSort = (property) => {
  let sortOrder = 1;

  if(property[0] === "-") {
    sortOrder = -1;
    property = property.substr(1);
  }

  return  (a,b) => {
    if(sortOrder === -1){
      return b[property].localeCompare(a[property]);
    }else{
      return a[property].localeCompare(b[property]);
    }
  }
};




/**
* Sort the array elements on drag and drop
* @param: {Array} the initial Array
 * @param: {dragResult} the resulting array from drag and drop
 * @returns {Array}  sorted array after drag and drop event
*/
export const applyDrag = (arr, dragResult) => {
  const { removedIndex, addedIndex, payload } = dragResult;
  if (removedIndex === null && addedIndex === null) return arr;

  const result = [...arr];
  let itemToAdd = payload;

  if (removedIndex !== null) {
    itemToAdd = result.splice(removedIndex, 1)[0];
  }

  if (addedIndex !== null) {
    result.splice(addedIndex, 0, itemToAdd);
  }

  return result;
};


