<template>
  <b-container class="h-100" style="background:url('https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80');
            background-repeat: no-repeat;
            background-size: cover;">
    <b-row class="h-100">
            <b-col  class="d-flex justify-content-center align-items-center" cols="1">
              <a href="" class=" question-drag-handle ml-2">
                <font-awesome-icon :icon="['fas', 'chevron-circle-left']"  size="4x" />
              </a>
            </b-col>
            <b-col cols="10" class="h-100 overflow-auto " v-html="content" >
              <!--Start Page-->
              <!--Content Page -->
              <!-- Exercise page-->
            </b-col>
            <b-col class="d-flex justify-content-center align-items-center" cols="1">
              <a href="" class=" question-drag-handle ml-2">
                <font-awesome-icon :icon="['fas', 'chevron-circle-right']"  size="4x" />
              </a>
            </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import { library } from '@fortawesome/fontawesome-svg-core'
  import { faChevronCircleLeft,faChevronCircleRight} from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  library.add(faChevronCircleLeft,
    faChevronCircleRight);
    export default {
        name: "ContentPagePreview",
      components:{
          'font-awesome-icon': FontAwesomeIcon
      },
      props:{
          content:{
            type: String,
            required: true,
            Description: "The Content to render in the page"
          }
      }
    }
</script>

<style scoped>

</style>
