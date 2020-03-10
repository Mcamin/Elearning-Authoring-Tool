<template>
  <Draggable class="lesson-interaction-wrapper mt-3">
    <b-link   @click.prevent="handleClick()">
    <b-card no-body class="mb-3">
      <!--Header-->
      <b-card-header header-tag="header" class="p-3" role="tab">
        <b-row>
          <!-- Left Settings -->
          <b-col class="text-left m-2 d-flex align-items-center" >
            <div class="d-inline-block mr-2 "  >
            <b-link  class="content-drag-handle mx-2">
              <font-awesome-icon :icon="['fas', 'bars']" size="lg"/>
            </b-link>
            </div>
            <div class="d-inline-block  content-description">
              <h4>{{element.title}}</h4>
              <b-badge variant="primary" pill>{{element.type}}</b-badge>
            </div>

          </b-col>
          <!-- End Left Settings -->

          <!--Right Settings-->
          <b-col class="text-right">
            <b-link @click.stop="handleDelete()" class="mx-2" v-b-tooltip.hover title="Delete">
              <font-awesome-icon :icon="['fas', 'trash']" size="lg"/>
            </b-link>
            <b-link @click.stop="handleEdit()" class="mx-2" v-b-tooltip.hover title="Edit">
              <font-awesome-icon :icon="['fas', 'cog']" size="lg"/>
            </b-link>
            <b-link @click.stop="handleShare()" class="mx-2" v-b-tooltip.hover title="Share">
              <font-awesome-icon :icon="['fas', 'share-alt']" size="lg"/>
            </b-link>
            <b-link @click.stop="handlePreview()" class="mx-2" v-b-tooltip.hover title="Preview">
              <font-awesome-icon :icon="['fas', 'eye']" size="lg"/>
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
      <b-collapse :id="`${element.uuid}`" visible :accordion="`lesson-interaction-${element.uuid}`" role="tabpanel">
        <b-card-body>
          {{element.description}}
        </b-card-body>
      </b-collapse>
      <!--End Content-->
    </b-card>
    </b-link>
  </Draggable>
</template>

<script>
  import {Draggable} from "vue-smooth-dnd"
  import {library} from '@fortawesome/fontawesome-svg-core'
  import {
    faShareAlt,
    faTrash,
    faCog,
    faSortUp,
    faSortDown,
    faEye,
    faBars
  } from '@fortawesome/free-solid-svg-icons'
  import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

  import {bus} from "@/main";
  import {mapActions} from "vuex";

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
    name: "ContentAccordion",
    data() {
      return {
        collapsed: false,
      }
    },
    props: {
      element: {
        type: Object,
        required:true,
        Description: "The Object containing infos about the element to render",
      },
      moduleId:{
        type:String,
        Description: "The id of the module containing the element",
      }

    },
    components: {
      'font-awesome-icon': FontAwesomeIcon,
      Draggable
    },


    methods: {
      ...mapActions('module',{setSelectedModule:'setSelectedModule'}),

      handleClick() {
        this.setSelectedModule(this.moduleId).then( () =>
          {

            if(this.element.type === 'Interaction')
              this.$router.push({name: 'edit-interaction', params: {id: this.element.uuid}});
            else
              this.$router.push({name: 'edit-lesson', params: {id: this.element.uuid}});
          }
        );

      },
      toggleCollapse(id) {
        this.$root.$emit('bv::toggle::collapse', id);
        this.collapsed = !this.collapsed;
      },
      handleShare() {

      },
      handleDelete() {
        let metadata = {
          id: this.element.uuid,
          type: this.element.type,
          title: this.element.title,
        };
        bus.$emit('delete-modal', metadata);
      },
      handleEdit() {
        let metadata = {
          id: this.element.uuid,
          type: this.element.type,
        };
        bus.$emit('edit-modal', metadata);
      },
      handlePreview() {
        this.$router.push({name: 'preview', params: {id: this.element.uuid}});
      }


    },

  }
</script>
