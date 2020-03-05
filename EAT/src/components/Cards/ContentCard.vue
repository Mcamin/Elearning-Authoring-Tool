<template>
  <a href="#">
  <b-card no-body class="mb-3">
    <!--Header-->
    <b-card-header header-tag="header" class="p-3" role="tab">
      <b-row>
        <!-- Left Settings -->
        <b-col  class="text-left">
          <h4>{{this.title}}</h4>
        </b-col>
        <!-- End Left Settings -->

        <!--Right Settings-->
        <b-col  class="text-right">
          <a href="#"  class="ml-2">
            <font-awesome-icon :icon="['fas', 'trash']"  color="gray" size="lg"/>
          </a>
          <a href="#" class="ml-2">
            <font-awesome-icon :icon="['fas', 'cog']" color="gray"  size="lg"/>
          </a>
        </b-col>
        <!--End Right settings -->
      </b-row>
    </b-card-header>

  </b-card>
  </a>
</template>

<script>

  import { library } from '@fortawesome/fontawesome-svg-core'
  import {faTrash,faCog} from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  library.add(
    faTrash,
    faCog,
  );

    export default {
      name: "ContentCard",
      data() {
        return {}
      },
      props: {
        contentId: {
          Type: String,
          Description: "the element uuid"
        },
        title: {
          Type: String,
          Description: "The element title received from the parent component"
        },

      },
      components: {
        'font-awesome-icon': FontAwesomeIcon,
      },
    }
</script>

<style scoped>

</style>
