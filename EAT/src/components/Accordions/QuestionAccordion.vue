<template>
  <b-card no-body class=" mb-3">
    <!--Header-->
    <b-card-header header-tag="header" class="p-3" role="tab">
      <b-row >
        <!-- Left Settings -->
        <b-col cols="2">
          <a href="" class=" question-drag-handle ml-2">
            <font-awesome-icon :icon="['fas', 'bars']" color="gray" size="lg" />
          </a>
        </b-col>
        <b-col cols="8" >
          <h4>{{questionObject.questionText}}</h4>
        </b-col>
        <!-- End Left Settings -->

        <!--Right Settings-->
        <b-col cols="2"  class="text-right">
          <a href=""  @click.prevent="removeQuestion" class="ml-2">
            <font-awesome-icon :icon="['fas', 'trash']"  color="gray"  size="lg"/>
          </a>

          <a href="" @click.prevent="toggleCollapse(questionObject.question_id)" class="ml-2">
            <font-awesome-icon :icon="['fas', meta.collapsed ? 'sort-up' : 'sort-down']" color="gray" size="lg"/>
          </a>

        </b-col>
        <!--End Right settings -->
      </b-row>
    </b-card-header>
     <!--End header -->

    <!--Question content -->
    <b-collapse :id="questionObject.question_id"   visible  :accordion="`accordion-${questionObject.question_id}`" role="tabpanel">
      <b-card-body>
        <b-container fluid>
          <!-- Question  -->
          <b-row>
            <b-col class="mb-3">
              <b-form-group
                class="mb-0"
                label="Question"
                label-for="question-x"
              >
                <b-form-textarea
                  id="question-x"
                  @change="triggerUpdate"
                  v-model="questionObject.questionText"
                  placeholder="Enter a question ..."
                  rows="3"
                  max-rows="6"
                ></b-form-textarea>
              </b-form-group>
            </b-col>
          </b-row>
          <!-- End Question -->
          <!-- Header-->
          <b-row class="my-4" id="qrow">
            <b-col cols="2" class="text-center" >
              <span>Correct</span>
            </b-col>
            <b-col class="text-center">
              <span>Choice Text</span>
            </b-col>
            <b-col cols="3" class="filter-wrapper text-right">
              <!-- Single or Multiple dropdown -->
              <el-select v-model="questionObject.questionType" placeholder="Multiple Choice">
                <el-option
                  default-first-option
                  v-for="item in meta.options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              <!-- End Single or Multiple dropdown -->
            </b-col>
          </b-row>
          <!-- End Header-->
          <b-row>
            <Container @drop="onDrop" drag-handle-selector=".answer-drag-handle" class="w-100">
              <!-- Choices -->
              <Draggable v-for="item in questionObject.answers" :key="item.id" class="answer-accordion-wrapper my-2">
                <b-card no-body>
                  <b-card-body class="px-0">
                    <b-container fluid>
                      <b-row>
                        <b-col cols="2 d-flex flex-row align-items-center">
                          <a class="answer-drag-handle mr-5">
                            <font-awesome-icon :icon="['fas', 'bars']" size="lg"/>
                          </a>

                          <b-form-checkbox v-if="questionObject.questionType === 'Multiple choice'"
                                           v-model="item.checked"
                                           @change="triggerUpdate"
                          >
                          </b-form-checkbox>

                          <!-- V-if Single choice -->
                          <b-form-radio v-else
                                        v-model="meta.selectedAnswer"
                                        :value="item.id"
                                        @change="setSelectedAnswer"
                          ></b-form-radio>
                        </b-col>
                        <!--Answer input -->
                        <b-col>
                          <b-form-input @change="triggerUpdate" v-model="item.text" placeholder="Enter an answer"/>
                        </b-col>
                        <!-- End Answer input -->
                        <!--Remove  Answer -->
                        <b-col cols="2 " class="text-center">
                          <a @click="removeAnswer(item.id)">
                            <font-awesome-icon :icon="['fas', 'trash']" size="lg"/>
                          </a>
                          <!-- End Remove  Answer -->
                        </b-col>
                      </b-row>
                    </b-container>
                  </b-card-body>
                </b-card>
              </Draggable>
            </Container>

            <!-- Add an answer Btn -->
            <el-button
              @click="addItem()"
              class="py-3 mt-2 w-100"
              style="text-align:
        center">Add an answer
            </el-button>
            <!-- End an answer Btn -->
          </b-row>


        </b-container>
      </b-card-body>
    </b-collapse>
    <!--End Question Content-->
  </b-card>
</template>

<script>

  import { library } from '@fortawesome/fontawesome-svg-core'
  import { faBars, faTrash,faSortUp,faSortDown} from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  import {Container,Draggable } from "vue-smooth-dnd";
  import {applyDrag} from "@/utils/helpers"
  import {bus} from "@/main";
  import keygen from "keygen";
  import {mapActions, mapState} from "vuex";

  library.add(
    faTrash,
    faSortUp,
    faSortDown,
    faBars
  );

    export default {
      name: "QuestionAccordion",
      components:{
        Container,
        Draggable,
        'font-awesome-icon': FontAwesomeIcon,
      },
      props: {
        question:{
          Type:Object,
        },
      },
      data(){
        return{
          meta:{
            options: [{
              value: 'Multiple choice',
              label: 'Multiple choice'
            }, {
              value: 'Single choice',
              label: 'Single choice'
            },],
            collapsed: false,
            selectedAnswer:''
          },
          questionObject: this.question
        }
      },
      computed:{
        ...mapState('interaction', ['currentInteraction']),
      },

      methods:{
        ...mapActions('interaction', {updateInteractionState: 'updateInteractionState'}),

        setSelectedAnswer(checked) {

          const index = this.questionObject.answers.findIndex(x => x.id === checked);
          this.questionObject.answers.forEach( (el,idx) => {
            el.checked = idx === index;
          });
          this.triggerUpdate();
        },
        addItem() {
          this.questionObject.answers.push({text: "",id: 'a-'+keygen.hex(6), checked: false});
          this.triggerUpdate();
        },
        removeQuestion() {
          bus.$emit("remove-question",this.questionObject.question_id);
        },
        removeAnswer(id) {
          const index = this.questionObject.answers.findIndex(x => x.id === id);
          this.questionObject.answers.splice( index, 1);
          this.triggerUpdate();
        },
        onDrop(dropResult) {
          this.questionObject.answers = applyDrag( this.questionObject.answers, dropResult);
          this.triggerUpdate();
        },
        triggerUpdate(){
          let questionsArray = [...this.currentInteraction.questions],
            foundIndex =  questionsArray.findIndex(
              el => el.question_id ===this.questionObject.question_id );

          questionsArray.splice(foundIndex, 1,this.questionObject);
          this.updateInteractionState({
            targetInteraction:this.currentInteraction.uuid,
            props:{
              questions:questionsArray
            }});
        },
        toggleCollapse(id) {
          this.$root.$emit('bv::toggle::collapse', id);
          this.meta.collapsed = ! this.meta.collapsed;
        },
      },

    }
</script>


