<template>
  <b-card no-body class="accordion-wrapper mb-3">
    <!--Header-->
    <b-card-header header-tag="header" class="p-3" role="tab">
      <b-row>
        <!-- Left Settings -->
        <b-col  class="text-left">
          <b-container class="d-flex">
            <label>
              <input :class="{view: !isEditing}" :disabled="!isEditing"  type="text" :value="secTitle"
                     ref="section_title" v-on:keyup.enter="toggleTitleInput">
            </label>
            <a class="ml-2" href="#">
              <font-awesome-icon :icon="['fas', 'pen']" @click="isEditing = !isEditing" size="lg" v-if="!isEditing" color="gray"/>
              <font-awesome-icon :icon="['fas', 'save']" @click="toggleTitleInput" size="lg" v-else-if="isEditing" color="gray"/>
            </a>
          </b-container>
        </b-col>
        <!-- End Left Settings -->

        <!--Right Settings-->
        <b-col  class="text-right">
          <a href="#"  class="ml-2">
            <font-awesome-icon :icon="['fas', 'trash']"  color="gray"/>
          </a>
          <a href="#" class="ml-2">
            <font-awesome-icon :icon="['fas', 'cog']" color="gray" />
          </a>

          <a href="#" @click.prevent="toggleCollapse(accordionID)" class="ml-2">
            <font-awesome-icon :icon="['fas', collapsed ? 'sort-up' : 'sort-down']" color="gray"/>
          </a>

        </b-col>
        <!--End Right settings -->
      </b-row>
    </b-card-header>
     <!--End header -->

    <!--Content-->
    <b-collapse :id="`${accordionID}`"   visible  :accordion="`myaccordion-${accordionID}`" role="tabpanel">
      <b-card-body>
         <!--Render Section Content: Modules-->
         <template v-if="isSection" v-for="module in getSectionContent(this.accordionID)">
            <component is="Accordion" :accordionTitle="module.title"
                       :accordionID="module.uuid"/>
          </template>

          <!--Render Module Content: Quizzes and interactions-->
        <!--<template v-if="index && isModule" v-for="c in getSectionContent(index)" >
          <b-link :to="elementPage(c.id)">
            <component is="Accordion" :accordionTitle="c.title" :accordionID="c.id"/>
          </b-link>

        </template>-->


        <AddBtn :triggered-by="this.accordionID"  />
      </b-card-body>
    </b-collapse>
    <!--End Content-->
  </b-card>
</template>

<script>

  import { library } from '@fortawesome/fontawesome-svg-core'
  import { faPen, faTrash,faCog,faSortUp,faSortDown, faSave} from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  import AddBtn from "../Buttons/AddBtn";
  import {mapActions, mapGetters, mapState} from "vuex";
  library.add(
    faPen,
    faTrash,
    faCog,
    faSortUp,
    faSortDown,
    faSave
  );

    export default {
      name: "Accordion",
      data(){
        return{
          isEditing: false,
          collapsed: false,
          secTitle: this.accordionTitle
        }
      },
      props: {

        accordionID:{
          Type:String,
          required: true,
          Description:"the element uuid"
        },
        accordionTitle:{
          Type:String,
          required: true,
          Description:"The element title received from the parent component"
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
        ...mapActions('module', {loadModule : 'loadModule'}),
          toggleTitleInput(){
            /*const payload = {
              oldTitle:this.secTitle,
              newTitle:this.$refs['section_title'].value,
            };*/
            this.secTitle = this.$refs['section_title'].value;
            //this.updateSectionTitle(payload);
            this.isEditing = !this.isEditing;
          },
        toggleCollapse(id) {
          this.$root.$emit('bv::toggle::collapse', id);
          this.collapsed = ! this.collapsed;
        },
          elementPage(id){
              if (id.charAt(0) === 'q')
                  return '/edit-interaction';
              else
                  return '/edit-lesson';
          },
        async loadSectionContent(){

            //keys: 0,1,2,3 positions in contentCourse array
            // key : uuid of the element to load
            if(this.isSection)
            { const keys = Object.keys(this.sections.find(el => el.uuid === this.accordionID).modulesIndex);
            for (const key in keys) {
                await this.loadModule(keys[key]);
            }}

        }
      },
        computed:{
          ...mapGetters(
            'section' , ['getSectionContent']
          ),
          ...mapState(
            'section' , ['sections']
          ),
            isSection() {
                return this.accordionID.charAt(0) === 's'
             },
            isModule() {
                return  this.accordionID.charAt(0) === 'm'
            },
        },

        created() {
          this.loadSectionContent();
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
