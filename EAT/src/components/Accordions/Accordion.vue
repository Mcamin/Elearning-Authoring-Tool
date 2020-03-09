<template>
  <b-card no-body class="mb-3">
    <!--Header-->
    <b-card-header header-tag="header" class="p-3" role="tab">
      <b-row>
        <!-- Left Settings -->

        <b-col cols="8"   class=" m-2 ">
          <a href="" class="question-drag-handle mx-2">
            <font-awesome-icon :icon="['fas', 'bars']"  size="lg" />
          </a>
          <h4 class="d-inline  mx-2">{{accordionTitle}}</h4>
        </b-col>


        <!-- End Left Settings -->

        <!--Right Settings-->
        <b-col  class="text-right m-2">
          <b-link  @click.stop="handleDelete()"  class="mx-2" v-b-tooltip.hover title="Delete">
            <font-awesome-icon :icon="['fas', 'trash']"  size="lg"/>
          </b-link>
          <b-link @click.stop="handleEdit()" class="mx-2" v-b-tooltip.hover title="Edit">
            <font-awesome-icon :icon="['fas', 'cog']"  size="lg" />
          </b-link>
          <b-link @click.stop="handleShare()" class="mx-2"  v-b-tooltip.hover title="Share">
            <font-awesome-icon :icon="['fas', 'share-alt']" size="lg" />
          </b-link>
          <b-link @click.stop="handlePreview()" class="mx-2"  v-b-tooltip.hover title="Preview">
            <font-awesome-icon :icon="['fas', 'eye']"  size="lg" />
          </b-link>

          <b-link  @click.prevent="toggleCollapse(accordionID)" class="ml-2" >
            <font-awesome-icon :icon="['fas', collapsed ? 'sort-up' : 'sort-down']"  size="lg"/>
          </b-link>
        </b-col>
        <!--End Right settings -->
      </b-row>
    </b-card-header>
     <!--End header -->

    <!--Content-->
    <b-collapse :id="`${accordionID}`"    visible  :accordion="`acc-${accordionID}`" role="tabpanel">
      <b-card-body>
         <!--Render Section Content: Modules-->
         <template  v-for="(module, index) in getSectionContent(this.accordionID)">
            <component v-if="isSection" :is="'Accordion'" :accordionTitle="module.title"
                       :accordionID="module.uuid" class=".section-content-drag-handle" :key="index"/>
          </template>

          <!--Render Module Content: Quizzes and interactions-->


         <Container @drop="onDropContent" drag-handle-selector=".content-drag-handle">
           <template v-for="(c,idx) in getModuleContent(this.accordionID)" >
           <ContentAccordion v-if="isModule"  :element="c" :module-id="accordionID"
                             :key="idx"/>
           </template>
         </Container>


        <AddBtn :triggered-by="this.accordionID"  />
      </b-card-body>
    </b-collapse>
    <!--End Content-->
  </b-card>
</template>

<script>
  import {Container} from 'vue-smooth-dnd'
  import { library } from '@fortawesome/fontawesome-svg-core'
  import {faBars,faEye, faShareAlt, faTrash,faCog,faSortUp,faSortDown} from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  import AddBtn from "../Buttons/AddBtn";
  import {mapActions, mapGetters, mapState} from "vuex";
  import {bus} from "@/main";
  import ContentAccordion from "@/components/Accordions/ContentAccordion";
  import {applyDrag} from "@/utils/helpers";
  library.add(
    faShareAlt,
    faTrash,
    faCog,
    faSortUp,
    faSortDown,
    faEye,
    faBars

  );

    export default {
      name: "Accordion",
      data(){
        return{
          collapsed: false,
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
        ContentAccordion,
        Container,
        AddBtn,
        'font-awesome-icon': FontAwesomeIcon,
      },

      methods:{
        onDropContent(dropResult) {
          console.log(dropResult);
          //let questionsArray = [...this.currentInteraction.questions];
         // questionsArray = applyDrag(questionsArray, dropResult);

          },

        ...mapActions('module', {loadModule : 'loadModule'}),
        ...mapActions('lesson', {loadLesson : 'loadLesson'}),
        ...mapActions('interaction', {loadInteraction : 'loadInteraction'}),

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
        handleShare() {
          let elmType = 'Module';
          if(this.isSection)
             elmType = 'Section';
          let metadata ={
            id: this.accordionID,
            type: elmType
          };
          bus.$emit('token-modal', metadata);
        },
        handlePreview(){

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
</style>
