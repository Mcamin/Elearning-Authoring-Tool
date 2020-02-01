<template>
  <b-card no-body class="accordion-wrapper mb-3">
    <!--Header-->
    <b-card-header header-tag="header" class="p-3" role="tab">
      <b-row>
        <!-- Left Settings -->
        <b-col  class="text-left">
          <b-container class="d-flex">
            <label>
              <input :class="{view: !isEditing}" :disabled="!isEditing"  type="text" :value="sectionTitle"
                     ref="section_title" v-on:keyup.enter="toggleTitleInput">
            </label>
            <a class="ml-2" href="#">
              <font-awesome-icon :icon="['fas', 'pen']" @click="isEditing = !isEditing" size="lg" v-if="!isEditing"/>
              <font-awesome-icon :icon="['fas', 'save']" @click="toggleTitleInput" size="lg" v-else-if="isEditing" />
            </a>
          </b-container>
        </b-col>
        <!-- End Left Settings -->

        <!--Right Settings-->
        <b-col  class="text-right">
          <a href="#"  class="ml-2">
            <font-awesome-icon :icon="['fas', 'trash']"  />
          </a>
          <a href="#" class="ml-2">
            <font-awesome-icon :icon="['fas', 'cog']" />
          </a>

          <a href="#" @click.prevent="toggleCollapse(accordionID)" class="ml-2">
            <font-awesome-icon :icon="['fas', collapsed ? 'sort-up' : 'sort-down']" />
          </a>

        </b-col>
        <!--End Right settings -->
      </b-row>
    </b-card-header>
     <!--End header -->

    <!--Content-->
    <b-collapse :id="`${accordionID}`"   visible  :accordion="`myaccordion-${accordionID}`" role="tabpanel">
      <b-card-body>
        <!--Add Element to the Accordion-->
        <AddBtn :func="'add-module'" :callerID="this.accordionID" />
      </b-card-body>
    </b-collapse>
    <!--End Content-->
  </b-card>
</template>

<script>

  import { library } from '@fortawesome/fontawesome-svg-core'
  import { faPen, faTrash,faCog,faSortUp,faSortDown ,faPlusCircle, faSave} from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  import {  mapActions} from "vuex";
  import AddBtn from "../Buttons/AddBtn";


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
          isEditing: false,
          collapsed: false

        }
      },
      props: {
        accordionID:{
          Type:String,
          required: true,
          Description:"the section uuid "
        },
        accordionTitle:{
          Type:String,
          required: true,
          Description:"The section title received from the parent component"
        },

      },
      components:{
        AddBtn,
        'font-awesome-icon': FontAwesomeIcon,
      },


      methods:{
     /*   ...mapActions([
          'updateSectionTitle'
        ]),*/
          toggleTitleInput(){
            const payload = {
              oldTitle:this.accordionTitle,
              newTitle:this.$refs['section_title'].value,
            };
            //this.updateSectionTitle(payload);
            this.isEditing = !this.isEditing;
          },
        toggleCollapse(id) {
          this.$root.$emit('bv::toggle::collapse', id);
          this.collapsed = ! this.collapsed;
        }
      }
    }
</script>

<style scoped>
  .view {
    border-color: transparent;
    background-color: initial;
    color: initial
  }
</style>
