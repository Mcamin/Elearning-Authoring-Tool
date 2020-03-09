<template>
  <b-container class="h-100" style="background:url('https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80');
            background-repeat: no-repeat;
            background-size: cover;">
    <b-row class="h-100 d-flex">
      <b-col  class="d-flex justify-content-center align-items-center" cols="1">
        <a href="" class=" question-drag-handle ml-2">
          <font-awesome-icon :icon="['fas', 'chevron-circle-left']"  size="4x" />
        </a>
      </b-col>
      <b-col cols="10" class="h-100 p-5 d-flex flex-column justify-content-center ">
        <section >
          <h2 style="color:white">Question goes here
          </h2>
        </section>

        <section class="ml-5 mt-5 h-50" >
          <b-form-checkbox-group
            id="checkbox-group-1"
            v-model="selected"
            :options="options"
            name="flavour-1"
            stacked
            size="lg"
            class="mb-3"
          ></b-form-checkbox-group>
          <!-- V-if Single choice -->
          <div class="text-right mt-5">
            <b-button>OK</b-button>
          </div>
        </section>


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
        name: "Interaction",
      components:{
        'font-awesome-icon': FontAwesomeIcon
      },
      data(){return {
        selected: [], // Must be an array reference!
        options: [
          { text: 'Orange', value: 'orange' },
          { text: 'Apple', value: 'apple' },
          { text: 'Pineapple', value: 'pineapple' },
          { text: 'Grape', value: 'grape' }
        ]
      }
        }

    }
</script>

<style scoped>
.custom-checkbox{
  margin-top: 20px;
}
</style>
