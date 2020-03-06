<template>
  <div>
    <h1>Message: {{ this.$route.params.id }}</h1>
    <b-container class="p-5 my-2">
      <div v-for="item in getCourseContent">
        <b-card >
          <b-card-text>
            <h4>{{item}}</h4>
            <div v-if="item.type === 'Section'" v-for="(mkey,val) in item.modulesIndex">
              <b-card>
                {{val}}
                <div v-for="(c,idx) in getModuleContent(val)">{{c}}</div>

              </b-card>
            </div>
          </b-card-text>
          <b-card-text></b-card-text>
          <b>Tags</b>
        </b-card>
      </div>
    </b-container>
  </div>
</template>

<script>
  import {mapGetters} from "vuex";

  export default {
    name: "Preview",
    data() {
      return {}
    },
    computed:{
      ...mapGetters(
        'course', ['getCourseContent']
      ),
      ...mapGetters(
        'module' , ['getModuleContent']
      ),
    }
    }
</script>

<style scoped>

</style>
