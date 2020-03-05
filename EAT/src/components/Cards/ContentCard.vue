<template>
  <b-card no-body class="mb-3">
    <!--Header-->
    <b-card-header header-tag="header" class="p-3" role="tab">
      <b-row>
        <!-- Left Settings -->
        <b-col  class="text-left">
          <h4>TITLE</h4>
        </b-col>
        <!-- End Left Settings -->

        <!--Right Settings-->
        <!--Right Settings-->
        <b-col  class="text-right">
          <a href="#"  class="ml-2">
            <font-awesome-icon :icon="['fas', 'trash']"  color="gray"/>
          </a>
          <a href="#" class="ml-2">
            <font-awesome-icon :icon="['fas', 'cog']" color="gray" />
          </a>
        </b-col>
        <!--End Right settings -->
      </b-row>
    </b-card-header>

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
      name: "ContentCard",
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
