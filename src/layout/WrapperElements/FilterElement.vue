<template>
  <b-row class=" filter-wrapper mb-4">
    <b-col class="text-right">
      <!-- Filter -->
      <span class="mx-2">Filter: </span>
      <el-select class="mx-1" v-model="filterValue" :placeholder="filterBy[0].label">
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
      <el-select class="mx-1" v-model="sortValue" :placeholder="sortBy[0].label">
        <el-option
          v-for="item in sortBy"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <!-- End Sort -->

      <el-divider class="mx-2" direction="vertical"/>

      <!-- View Options -->
      <b-link @click.prevent="triggerListView()" class="mx-2" href="#">
        <font-awesome-icon :icon="['fas', 'th-list']" size="lg"/>
      </b-link>
      <b-link @click.prevent="triggerCardView()" class="mx-2" href="#">
        <font-awesome-icon :icon="['fas', 'th']" size="lg"/>
      </b-link>
      <!-- End View Options -->
    </b-col>
  </b-row>
</template>

<script>
    import {library} from '@fortawesome/fontawesome-svg-core'
    import {faTh, faThList} from '@fortawesome/free-solid-svg-icons'
    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
    import {bus} from '@/main'
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
                sortValue: 'Recent',
                filterValue: 'AllCategories'

            }
        },
        computed: {
            //TODO: get the available categories from courses array
            filterBy() {
                // Return getAvailableCategories();
                return [
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
                ];
            }

        },
        methods: {
            triggerListView: () => {
                bus.$emit('list-view');
            },
            triggerCardView: () => {
                bus.$emit('card-view');
            }
        }
    }
</script>

