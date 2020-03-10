<template>
  <Draggable  class="section-module-wrapper mt-3">
  <b-card no-body class="mb-3">
    <!--Header-->
    <b-card-header header-tag="header" class="p-3" role="tab">
      <b-row>
        <!-- Left Settings -->
        <b-col cols="8"   class=" m-2 ">
          <div class="d-inline-block ">
            <a :class="[element.type ==='Module' && inSection ? 'module-drag-handle':'section-module-drag-handle', 'mx-2'] ">
              <font-awesome-icon :icon="['fas', 'bars']"  size="lg" />
            </a>
          </div>


          <div class="d-inline-block ml-4">
            <h4 >{{element.title}}</h4>
            <b-badge variant="primary" pill>{{element.type}}</b-badge>
            <p>{{element.description}}</p></div>
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

          <b-link  @click.stop="toggleCollapse(element.uuid)" class="ml-2" >
            <font-awesome-icon :icon="['fas', collapsed ? 'sort-up' : 'sort-down']"  size="lg"/>
          </b-link>
        </b-col>
        <!--End Right settings -->
      </b-row>
    </b-card-header>
     <!--End header -->

    <!--Content-->
    <b-collapse :id="`${element.uuid}`"    visible  :accordion="`section-module-${element.uuid}`" role="tabpanel">
      <b-card-body>
         <!--Render Section Content: Modules-->
        <Container group-name="1"  v-if="isSection" @drop="onDropModules" drag-handle-selector=".module-drag-handle" class="mb-4">
        <template  v-for="(module, index) in getSectionContent(this.element.uuid)">
            <component  :is="'Accordion'" :element="module" :inSection="true"  :key="index"/>
          </template>
          </Container>
          <!--Render Module Content: Quizzes and interactions-->
         <Container group-name="2"  v-if="isModule" @drop="onDropContent" drag-handle-selector=".content-drag-handle" class="mb-4">
           <template v-for="(c,idx) in getModuleContent(element.uuid)" >
           <ContentAccordion   :element="c" :module-id="element.uuid"
                             :key="idx"/>
           </template>
         </Container>
        <AddBtn :triggered-by="element.uuid"  />
      </b-card-body>
    </b-collapse>
    <!--End Content-->
  </b-card>
  </Draggable>

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
  import {Draggable} from "vue-smooth-dnd"
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
        element: {
          type: Object,
          required:true,
          description: "The Object containing infos about the element to render",
        },
        inSection:{
          type: Boolean,
          default: false,
          description: "Check if the module is inside a section or inside course"

        }

      },
      components:{
        ContentAccordion,
        Container,
        Draggable,
        AddBtn,
        'font-awesome-icon': FontAwesomeIcon,
      },

      methods:{
        ...mapActions('module', {loadModule : 'loadModule',updateModule:'updateModule'}),
        ...mapActions('section', {updateSection:'updateSection'}),
        ...mapActions('lesson', {loadLesson : 'loadLesson'}),
        ...mapActions('interaction', {loadInteraction : 'loadInteraction'}),

        onDropContent(dropResult) {
          let questionsArray = [...this.getModuleContent(this.element.uuid)],
            payload = {};
          questionsArray = applyDrag(questionsArray, dropResult);
          payload = questionsArray.reduce((obj, item,index) => {
            obj[item.uuid] = index;
            return obj
          }, {});
          this.updateModule({
            targetModule: this.element.uuid,
            props: {
              contentIndex: payload
            }
          });
          },
        onDropModules(dropResult){
          let questionsArray = [...this.getSectionContent(this.element.uuid)],
            payload = {};
          questionsArray = applyDrag(questionsArray, dropResult);
          payload = questionsArray.reduce((obj, item,index) => {
            obj[item.uuid] = index;
            return obj
          }, {});
          this.updateSection({
            targetSection: this.element.uuid,
            props: {
              modulesIndex: payload
            }
          });
        },
        toggleCollapse(id) {
          this.$root.$emit('bv::toggle::collapse', id);
          this.collapsed = ! this.collapsed;
        },

        handleDelete(){
           let metadata = {
              id: this.element.uuid,
              type: this.element.type,
              title: this.element.title,
            };
          bus.$emit('delete-modal', metadata);
        },
        handleEdit(){
          let
            metadata = {
              id: this.element.uuid,
              type: this.element.type,
            };
          bus.$emit('edit-modal', metadata);
        },
        handleShare() {
          let elmType = 'Module';
          if(this.isSection)
             elmType = 'Section';
          let metadata ={
            id: this.element.uuid,
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
            { const keys = Object.keys(this.sections.find(el => el.uuid === this.element.uuid).modulesIndex);
            for (const key in keys) {
              let moduleFound = this.modules.findIndex( (el) => {return el.uuid === keys[key]});
              if (moduleFound === -1)
                await this.loadModule(keys[key]);
            }}
            else{
              const keys = Object.keys(this.modules.find(el => el.uuid === this.element.uuid).contentIndex);
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
          ...mapGetters('section' , ['getSectionContent']),
          ...mapGetters('module' , ['getModuleContent']),
          ...mapState('section' , ['sections']),
          ...mapState('module' , ['modules']),
          ...mapState('lesson' , ['lessons']),
          ...mapState('interaction' , ['interactions']
          ),
            isSection() {
                return this.element.type === "Section"
             },
            isModule() {
                return  this.element.type === "Module"
            },
        },

        created() {
          this.loadSectionContent();
        }

    }
</script>
