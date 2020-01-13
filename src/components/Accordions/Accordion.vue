<template>
  <b-card no-body class="mb-3">
    <!--Header-->
    <b-card-header header-tag="header" class="p-3" role="tab">
      <b-row>
        <!-- Left Settings -->
        <b-col  class="text-left">
          <b-container class="d-flex">
            <label>
              <input :class="{view: !isEditing}" :disabled="!isEditing"  type="text" :value="sectionTitle"
                     ref="section_title" v-on:keyup.enter="toggleTitleInput"/>
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
          
          <b-btn block href="#" v-b-toggle.accordion1 variant="secondary">
              Time Period
            <span class="when-opened">
                <font-awesome-icon icon="chevron-down" />
            </span>
            <span class="when-closed">
                <font-awesome-icon icon="chevron-right" />
            </span>
          </b-btn>

        </b-col>
        <!--End Right settings -->

      </b-row>
    </b-card-header>
     <!--End header -->
    <!--Content-->
    <b-collapse :id="`accordion-${sectionID}`" v-model="collapsed" :accordion="`myaccordion-${sectionID}`" role="tabpanel">
      <b-card-body>
        <!--Module-->
        <slot name="Module"/>
        <!-- End Module-->
        <!--Lesson-->
        <slot name="Lesson_Interaction_Gloassary"/>
        <!--Add Element to the Accordion-->
      </b-card-body>
    </b-collapse>
    <!--End Content-->
  </b-card>
</template>

<script>

  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  import { mapGetters, mapActions, mapState} from "vuex";
  import { uuid } from 'vue-uuid';
  
    export default {
      name: "Accordion",
      data(){
        return{
          collapsed:true,
          isEditing: false,

        }
      },
      props: {
        sectionID:{
          Type:String,
          required: true,
          Description:"the section uuid "
        },
        sectionTitle:{
          Type:String,
          required: true,
          Description:"The section title recieved from the parent component"

        },

      },
      components:{
        'font-awesome-icon': FontAwesomeIcon,
      },


      methods:{
        ...mapActions([
          'updateSectionTitle'
        ]),
          toggleTitleInput(){
            const payload = {
              oldTitle:this.sectionTitle,
              newTitle:this.$refs['section_title'].value,
            };
            this.updateSectionTitle(payload);
            this.isEditing = !this.isEditing;
          }
      },
      mounted() {
        this.$root.$on('bv::collapse::state', (collapseId, isJustShown) => {
          this.collapsed=isJustShown;
          console.log(collapseId);
        })
      },
    }
</script>

<style scoped>

</style>
