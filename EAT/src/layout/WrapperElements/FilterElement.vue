<template>
  <b-row class=" filter-wrapper mb-4">
    <b-col class="text-right">
      <!-- Filter -->
      <span v-if="!isLibraryPage" class="mx-2">Filter: </span>
      <el-select v-if="!isLibraryPage" @change="triggerFilter" class="mx-1" v-model="filterValue" :placeholder="filterBy[0].label">
        <el-option
          v-for="item in filterBy"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <!-- End Filter -->
      <span class="mx-2">Sort by: </span>

      <!-- Sort -->
      <el-select @change="triggerSort"  class="mx-1" v-model="sortValue" :placeholder="sortBy[0].label">
        <el-option
          v-for="item in sortBy"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <!-- End Sort -->


      <el-divider v-if="!isLibraryPage" class="mx-2" direction="vertical"/>

      <!-- View Options -->
      <b-link v-if="!isLibraryPage" @click.prevent="triggerListView()" class="mx-2" href="#">
        <font-awesome-icon :icon="['fas', 'th-list']" size="lg"/>
      </b-link>
      <b-link  v-if="!isLibraryPage" @click.prevent="triggerCardView()" class="mx-2" href="#">
        <font-awesome-icon :icon="['fas', 'th']" size="lg"/>
      </b-link>
      <!-- End View Options -->
    </b-col>
  </b-row>
</template>

<script>
    import {checkRouter} from "@/utils/helpers";
    import {library} from '@fortawesome/fontawesome-svg-core'
    import {faTh, faThList} from '@fortawesome/free-solid-svg-icons'
    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
    import {bus} from '@/main'
    import {mapState} from "vuex";
    library.add(
        faTh,
        faThList
    );

    export default {
        name: "FilterElement",
        components: {
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
              filterBy:[
                {
                  value: 'AllCategories',
                  label: 'All Categories'
                },
              ],
              sortValue: 'Recent',
                filterValue: 'AllCategories'

            }
        },
        computed: {
          ...mapState(['categories']),
            isLibraryPage (){
                return checkRouter(this.$route.name, "library");
            },


        },
        methods: {
            triggerListView()  {
                bus.$emit('list-view');
            },
            triggerCardView ()  {
                bus.$emit('card-view');
            },
          triggerSort()  {
            bus.$emit('change-sort',this.sortValue);
          },
          triggerFilter ()  {
              //return Label not Value
            bus.$emit('change-filter',this.filterValue);
          },
        },
      mounted() {
        this.filterBy.push(...this.categories);
      }
    }
</script>

