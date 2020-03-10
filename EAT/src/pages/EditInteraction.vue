<template>

  <b-container  class="h-100 mt-5">
    <SettingsCard :meta="interactionMeta"/>
    <b-row class="my-5">
      <b-col>
        <Container v-if="currentInteraction" @drop="onDropQuestion" drag-handle-selector=".question-drag-handle"
                   class="w-100">
          <!-- Question Accordion -->
          <Draggable v-for="question in  currentInteraction.questions" :key="question.question_id"
                     class="question-accordion-wrapper mt-3">
            <QuestionAccordion :question="question"/>
          </Draggable>
          <!-- End Question Accordion -->
        </Container>
      </b-col>
    </b-row>
    <!-- Add Question -->
    <b-row class="my-5">
      <b-col>
        <AddQuestionBtn/>
      </b-col>
    </b-row>
    <!-- End add Question -->
  </b-container>
</template>

<script>

 import SettingsCard from "@/components/Cards/SettingsCard";
  import {bus} from "@/main";
  import {Container, Draggable} from "vue-smooth-dnd";
  import QuestionAccordion from "@/components/Accordions/QuestionAccordion";
  import AddQuestionBtn from "@/components/Buttons/AddQuestionBtn";
  import keygen from 'keygen'
  import {applyDrag} from "@/utils/helpers";
  import {mapActions, mapState} from "vuex";


  export default {
    name: "EditInteraction",
    components: {QuestionAccordion, AddQuestionBtn, Container, Draggable,SettingsCard},
    data() {
      return {
        intervalId: ''
      }
    },
    computed: {
      ...mapState('interaction', ['currentInteraction', 'interactions']),
      ...mapState('module', ['currentModule']),
      interactionMeta(){
        return {
          title: this.currentInteraction.title,
          description : this.currentInteraction.description
        }
      }
    },
    methods: {

      ...mapActions('interaction', {
        createInteraction: 'createInteraction',
        setSelectedInteraction: 'setSelectedInteraction',
        updateInteractionState: 'updateInteractionState',
        updateInteraction: 'updateInteraction',
        loadInteraction: 'loadInteraction'
      }),
      ...mapActions('module', {updateModule: 'updateModule'}),

      //  Initialize Interaction content on creation
      async initInteractionContent() {
        let
          newInteraction = null,
          id = this.$route.params.id,
          hasElement = this.currentModule.contentIndex.hasOwnProperty(id),
          moduleContentIndex = this.currentModule.contentIndex,
          contentLength = Object.keys(moduleContentIndex).length,
          foundInteraction = this.interactions.findIndex(el => {
            return el.uuid === id
          });
        if (!hasElement) {
          newInteraction = {
            uuid: id,
            title: "New Interaction",
            type: "Interaction",
            description: "",
            score: 0,
            shuffle: false,
            questions: [{
              question_id: 'q-' + keygen.hex(8),
              questionText: "",
              questionType: "Single choice",
              answers: [
                {text: "", id: 'a-' + keygen.hex(6), checked: false},
              ]
            }]
          };
          // Create an interaction
          await this.createInteraction(newInteraction);
          //update Module Index
          moduleContentIndex[id] = contentLength;
          await this.updateModule({
            targetModule: this.currentModule.uuid,
            props: {
              contentIndex: moduleContentIndex
            }
          });
        } else {
          if(foundInteraction!==-1)
            this.setSelectedInteraction(id);
          else
          { await this.loadInteraction(id).then(()=>{
            this.setSelectedInteraction(id);
          })

          }
        }
      },

      addQuestion() {

        let newQuestion = {
          question_id: 'q-' + keygen.hex(8),
          questionText: "",
          questionType: "Single choice",
          answers: [
            {text: "", id: 'a-' + keygen.hex(6), checked: false},
          ]
        };
        let questionsArray = [...this.currentInteraction.questions];
        questionsArray.push(newQuestion);
        this.updateInteractionState({
          targetInteraction: this.currentInteraction.uuid,
          props: {
            questions: questionsArray
          }
        });
      },
      removeQuestion(question_id) {
        let questionsArray = [...this.currentInteraction.questions];
        questionsArray = questionsArray.filter(el => el.question_id !== question_id);
        this.updateInteractionState({
          targetInteraction: this.currentInteraction.uuid,
          props: {
            questions: questionsArray
          }
        });
      },
      onDropQuestion(dropResult) {
        let questionsArray = [...this.currentInteraction.questions];
        questionsArray = applyDrag(questionsArray, dropResult);
        this.updateInteractionState({
          targetInteraction: this.currentInteraction.uuid,
          props: {
            questions: questionsArray
          }
        });

      },
      async saveInteractionInDB() {
        let interActionID = this.currentInteraction.uuid,
          interactionContent = {...this.currentInteraction};
        const isSaved = await this.updateInteraction({
          targetInteraction: interActionID,
          props: interactionContent
        });
        bus.$emit('element-saved', isSaved);
      }
    },
    created() {
      this.initInteractionContent();
      bus.$on("add-question", () => {
        this.addQuestion();
      });
      bus.$on("remove-question", (question_id) => {
        this.removeQuestion(question_id);
      });
      // save every x minute : set in .env
      this.intervalId = setInterval(this.saveInteractionInDB, parseInt(process.env.VUE_APP_SAVE_INTERVAL) * 60000);

    },
    beforeDestroy() {
      clearInterval(this.intervalId);
      this.saveInteractionInDB();
    },
  }
</script>


