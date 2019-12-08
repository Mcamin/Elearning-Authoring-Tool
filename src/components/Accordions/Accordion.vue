<template>
  <b-card no-body class="mb-3">
    <!--Header-->
    <b-card-header header-tag="header" class="p-3" role="tab">
      <b-row>
        <b-col  class="text-left">
          <span>{{title}}</span>
          <a href="#" class="ml-2">
            <font-awesome-icon :icon="['fas', 'pen']"  />
          </a>

        </b-col>
        <b-col  class="text-right">
          <a href="#"  class="ml-2">
            <font-awesome-icon :icon="['fas', 'trash']"  />
          </a>
          <a href="#" class="ml-2">
            <font-awesome-icon :icon="['fas', 'cog']" />
          </a>
          <a href="#" @click="collapsed = !collapsed" class="ml-2">
            <font-awesome-icon :icon="['fas', collapsed ? 'sort-up' : 'sort-down']" />
          </a>
        </b-col>
      </b-row>
    </b-card-header>
    <!--Content-->
    <b-collapse id="accordion-1" v-model="collapsed" accordion="my-accordion" role="tabpanel">
      <b-card-body>
        <!--Module-->
        <slot name="Module"/>
        <!-- End Module-->
        <!--Lesson-->
        <slot name="Lesson_Interaction_Gloassary"/>
        <b-button block  href="#" v-b-modal="'add-unit'">
          <font-awesome-icon :icon="['fas', 'plus-circle']" size="2x" />
        </b-button>


      </b-card-body>
    </b-collapse>
  </b-card>
</template>

<script>

  import { library } from '@fortawesome/fontawesome-svg-core'
  import { faPen, faTrash,faCog,faSortUp,faSortDown ,faPlusCircle} from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

  library.add(
    faPen,
    faTrash,
    faCog,
    faSortUp,
    faSortDown,
    faPlusCircle

  );
    export default {
      name: "Accordion",
      data(){
        return{
          title:"Section 1",
          collapsed:true,


        }
      },
      components:{
        'font-awesome-icon': FontAwesomeIcon,
      },
      props:{
        config:{
          type:Object
        }
      },
      mounted() {
        this.$root.$on('bv::collapse::state', (collapseId, isJustShown) => {
          this.collapsed=isJustShown;
        })
      }
    }
</script>

<style scoped>
.btn{
  background: transparent;
  border: 1px dashed darkcyan;
}
.fa-plus-circle{
    color:darkcyan;
  }
</style>
