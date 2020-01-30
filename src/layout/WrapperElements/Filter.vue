<template>
  <b-row class=" filter-wrapper mb-4">
    <b-col class="text-right">
      <span class="mx-2">Filter: </span>
      <el-select class="mx-1" v-model="sortValue" :placeholder="filterBy[0].label">
        <el-option
          v-for="item in filterBy"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>

      <span  class="mx-2">Sort by: </span>
      <el-select  class="mx-1" v-model="filterValue" :placeholder="sortBy[0].label">
        <el-option
          v-for="item in sortBy"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-divider class="mx-2" direction="vertical"/>
      <b-link class="mx-2" href="#"><font-awesome-icon :icon="['fas', 'th-list']" size="lg" /></b-link>
      <b-link class="mx-2" href="#"><font-awesome-icon :icon="['fas', 'th']" size="lg" /></b-link>


    </b-col>
  </b-row>
</template>

<script>
  import { library } from '@fortawesome/fontawesome-svg-core'
  import { faTh,faThList} from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  library.add(
    faTh,
    faThList
  );
    export default {
        name: "Filter",
      components:{
        'font-awesome-icon': FontAwesomeIcon,
      },
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
          filterBy: [
            {
              value: 'AllCategories',
              label: 'All Categories'
            },
            {
              value: 'Development',
              label: 'Development'
            },
            {
              value: 'ITSoftware',
              label: 'IT & Software'
            },

          ],
          sortValue: '',
          filterValue:''

        }
      }
    }
</script>

