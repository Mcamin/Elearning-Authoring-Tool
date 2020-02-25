<template>

  <b-container fluid class=" mt-5 h-100 px-0" style="background: red">
    <b-row class="h-100">
      <b-col cols="3"  style="background-color: blue">
        HEllo
      </b-col>
      <b-col style="background: green" class="d-flex align-items-end">
        <b-card style="width: 50% "  class="mx-2 mb-3">
          <b-card-body>
            hello
          </b-card-body>
        </b-card>
        <b-card style="width: 50%" class="mx-2 mb-3">
          <b-card-body>
            <el-select class="mx-1"  :placeholder="sortBy[0].label">
              <el-option
                v-for="item in sortBy"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  // Import the editor

  export default {
    name: "playground",
    components:{  },
    data() {
      return {
        sortBy: [
          {
            value: 'Recent',
            label: 'Recently Added'
          }, {
            value: 'TitleReversed',
            label: 'Title: Z-to-A'
          },
          {
            value: 'Title',
            label: 'Title: A-to-Z'
          },
        ],
      }
    },

  };
</script>
<style lang="scss">

</style>
