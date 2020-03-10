<template>
  <b-container class="h-100" style="background:url('https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80');
            background-repeat: no-repeat;
            background-size: cover;">
    <b-row class="h-100 d-flex">
      <b-col    class="d-flex justify-content-center align-items-center" cols="1">
        <b-link @click.prevent="stepBack()" :class="[isFirstPage ? 'd-none' : '', 'ml-2']">
          <font-awesome-icon :icon="['fas', 'chevron-circle-left']"  size="4x" />
        </b-link>
      </b-col>
      <b-col cols="10" class="h-100 p-5 d-flex flex-column justify-content-center ">
        <section >
          <h2 style="color:white">{{currentQuestion.questionText}}
          </h2>
        </section>

        <section class="ml-5 mt-5 h-50" >
          <b-form-checkbox
            v-for="answer in currentQuestion.answers"
            v-model="selected"
            :key="answer.text"
            :value="answer.id"
            name="flavour-3a"
          >
            {{ answer.text }}</b-form-checkbox>
          <!-- V-if Single choice -->
          <div class="text-right mt-5">
            <b-button @click.prevent="evaluate">OK</b-button>
          </div>
        </section>


      </b-col>
      <b-col class="d-flex justify-content-center align-items-center" cols="1">
        <b-link @click.prevent="stepForward()"  :disabled='!evaluated' :class="[isLastPage ? 'd-none' : '', 'ml-2']">
          <font-awesome-icon :icon="['fas', 'chevron-circle-right']"  size="4x" />
        </b-link>
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
      props:{
        interaction:{
          type: Object,
          required: true,
          description: "The question to render"
        }
      },
      data(){return {
        currentQuestion: this.interaction.questions[0],
        selected: [], // the selected answers
        evaluated : true, // used to check if exercise is assessed
        currentIndex: 0 // index of question in the interaction to track navigation
      }
        },
      methods:{
          stepBack(){
            if(!this.isFirstPage)
              this.currentQuestion = this.interaction.questions[this.currentIndex-1];
            this.currentIndex --;
          },
        stepForward(){
          if(!this.isLastPage)
            this.currentQuestion = this.interaction.questions[this.currentIndex+1];
          this.currentIndex ++;
        },
          evaluate(){

            switch (this.currentQuestion.questionType) {
              case "Multiple choice":
                console.log(this.selected);
                break;
                case "Single Choice":
                  break;
            }
          },
        loadNextQuestion(){
         if(this.evaluated)
           //set next button to active
           this.evaluated= false;
        }
      },
      computed:{
        /**
         * Navigation control : to hide back button
         * @returns {boolean}
         */
          isFirstPage() {
            return this.currentIndex === 0
          },
        /**
         *  Navigation control : to hide next button last question is reached
         * @returns {boolean}
         */
        isLastPage(){
            return this.currentIndex === (this.interaction.questions.length-1);
        },

      }

    }
</script>

<style scoped>
  a.disabled {
    pointer-events: none;
    color: rgba(33, 150, 120, 0.51);
  }
</style>
