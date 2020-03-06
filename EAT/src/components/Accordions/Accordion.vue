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
            <a class="ml-2" href="">
              <font-awesome-icon :icon="['fas', 'pen']" @click="isEditing = !isEditing" size="lg" v-if="!isEditing" color="gray"/>
              <font-awesome-icon :icon="['fas', 'save']" @click="toggleTitleInput" size="lg" v-else-if="isEditing" color="gray"/>
            </a>
          </b-container>
        </b-col>
        <!-- End Left Settings -->

        <!--Right Settings-->
        <b-col  class="text-right">
          <b-link  @click.stop="handleDelete()"  class="ml-2">
            <font-awesome-icon :icon="['fas', 'trash']"  color="gray" size="lg"/>
          </b-link>
          <b-link @click.stop="handleEdit()" class="ml-2">
            <font-awesome-icon :icon="['fas', 'cog']" color="gray" size="lg" />
          </b-link>

          <a href="" @click.prevent="toggleCollapse(accordionID)" class="ml-2" >
            <font-awesome-icon :icon="['fas', collapsed ? 'sort-up' : 'sort-down']" color="gray" size="lg"/>
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
         <template  v-for="(module, index) in getSectionContent(this.accordionID)">
            <component v-if="isSection" :is="'Accordion'" :accordionTitle="module.title"
                       :accordionID="module.uuid" :key="index"/>
          </template>

          <!--Render Module Content: Quizzes and interactions-->
       <template v-for="(c,idx) in getModuleContent(this.accordionID)" >

            <ContentCard  v-if="isModule" :contentId="c.uuid" :title="c.title" :module-id="accordionID"
                       :key="idx"/>
        </template>
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
  import ContentCard from "@/components/Cards/ContentCard";
  import {bus} from "@/main";
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
        ContentCard,
        AddBtn,
        'font-awesome-icon': FontAwesomeIcon,
      },


      methods:{

        ...mapActions('module', {loadModule : 'loadModule'}),
        ...mapActions('lesson', {loadLesson : 'loadLesson'}),
        ...mapActions('interaction', {loadInteraction : 'loadInteraction'}),
          toggleTitleInput(){

            this.secTitle = this.$refs['section_title'].value;
            this.isEditing = !this.isEditing;
          },
        toggleCollapse(id) {
          this.$root.$emit('bv::toggle::collapse', id);
          this.collapsed = ! this.collapsed;
        },

        handleDelete(){
          let contentType = this.accordionID.charAt(0)==='s'? "Section":"Module",
            metadata = {
              id: this.accordionID,
              type: contentType,
              title: this.accordionTitle,
            };
          bus.$emit('delete-modal', metadata);
        },
        handleEdit(){
          let contentType = this.accordionID.charAt(0)==='s'? "Section":"Module",
            metadata = {
              id: this.accordionID,
              type: contentType,
            };
          bus.$emit('edit-modal', metadata);
        },


        async loadSectionContent(){

            //keys: 0,1,2,3 positions in contentCourse array
            // key : uuid of the element to load
            if(this.isSection)
            { const keys = Object.keys(this.sections.find(el => el.uuid === this.accordionID).modulesIndex);
            for (const key in keys) {
              let moduleFound = this.modules.findIndex( (el) => {return el.uuid === keys[key]});
              if (moduleFound === -1)
                await this.loadModule(keys[key]);
            }}
            else{
              const keys = Object.keys(this.modules.find(el => el.uuid === this.accordionID).contentIndex);
              for (const key in keys) {
                if(keys[key].charAt(0)=== 'i') {
                  let interactionFound = this.interactions.findIndex((el) => {
                    return el.uuid === keys[key]
                  });
                  if (interactionFound === -1)
                    await this.loadInteraction(keys[key]);
                } else
                {let lessonFound = this.lessons.findIndex( (el) => {
                  return el.uuid === keys[key]
                });

                    if (lessonFound === -1)
                      await this.loadLesson(keys[key]);}
              }
            }
        }

      },
        computed:{
          ...mapGetters(
            'section' , ['getSectionContent']
          ),
          ...mapGetters(
            'module' , ['getModuleContent']
          ),
          ...mapState(
            'section' , ['sections']
          ),
          ...mapState(
            'module' , ['modules']
          ),
          ...mapState(
            'lesson' , ['lessons']
          ),
          ...mapState(
            'interaction' , ['interactions']
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
