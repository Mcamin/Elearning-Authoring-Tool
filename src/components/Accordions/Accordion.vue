<template>
  <b-card no-body class="mb-3">
    <!--Header-->
    <b-card-header header-tag="header" class="p-3" role="tab">
      <b-row>
        <b-col  class="text-left">
          <b-container class="d-flex">
            <input :class="{view: !isEditing}" :disabled="!isEditing" :value="lesson.title" ref="lesson_title"
                   type="text">
            <a class="ml-2" href="#">
              <font-awesome-icon :icon="['fas', 'pen']" @click="isEditing = !isEditing" size="xs"
                                 v-if="!isEditing"/>

              <font-awesome-icon :icon="['fas', 'save']" @click="toggleTitleInput" size="xs" v-else-if="isEditing"/>
            </a>
          </b-container>

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
  import { faPen, faTrash,faCog,faSortUp,faSortDown ,faPlusCircle, faSave} from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

  library.add(
    faPen,
    faTrash,
    faCog,
    faSortUp,
    faSortDown,
    faPlusCircle,
    faSave
  );
    export default {
      name: "Accordion",
      data(){
        return{
          collapsed:true,
          isEditing: false,
          lesson: {
            title: 'LessonTitle'
          }
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
        methods:{
            toggleTitleInput(){
              this.lesson.title = this.$refs['lesson_title'].value;
              this.isEditing = !this.isEditing;
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
.view {
  border-color: transparent;
  background-color: initial;
  color: initial
}
</style>
