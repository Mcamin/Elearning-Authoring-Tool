<template>
  <div>
    <h1>Course Title: {{ currentCourse.title }}</h1>
    <b-container class="p-5 my-2">
      <div v-for="item in getCourseContent">
        <b-card >
          <b-card-text>
            <h1>Section Title: {{item.title}}</h1>
            <h4>Section Description: {{item.description}}</h4>
            <div v-if="item.type === 'Section'" v-for="(mkey,val) in item.modulesIndex">
              <b-card>
                <!--{{val}}-->
                <div v-for="c in getModuleContent(val)">
                    <div v-if="c.type === 'Lesson'">Lesson Title: {{c.title}} <br/>
                      Lesson Description: {{c.description}} </div><br/>

                  <!-- HTML rendering of Lesson content -->
                  <p v-html="c.content"></p>
                  <hr>
                  <div v-if="c.type === 'Interaction'">
                    {{c.title}}

                    <!-- Go through questions -->
                    <div v-for="question in c.questions">
                      <b>{{question.questionText}} : {{question.questionType}}</b>

                      <!-- V-if Multiple choice -->
                      <b-row v-if="question.questionType === 'Multiple choice'">
                      <b-form-checkbox v-model="answer.checked" @change="triggerUpdate">
                        {{answer.text}}
                      </b-form-checkbox>
                      </b-row>

                      <!-- V-if Single choice -->
                      <b-form-group v-else>
                      <b-row v-for="answer in question.answers">
                        <b-form-radio v-model="selected"
                                      name="some-radios"
                                      :value="answer.id">{{answer.text}}</b-form-radio>
                      </b-row>
                      </b-form-group>
                    </div>
                  </div>
                </div>
              </b-card>
            </div>
          </b-card-text>
          <b-card-text></b-card-text>
          <b-button @click="handleSubmit" size="sm" class="my-2 my-sm-0" type="submit">SUBMIT</b-button>
        </b-card>
      </div>
    </b-container>
  </div>
</template>

<script>
  import {mapGetters, mapState} from "vuex";

  export default {
    name: "Preview",
    data() {
      return {}
    },
    computed:{
      ...mapGetters(
        'course', ['getCourseContent']
      ),
      ...mapGetters(
        'module' , ['getModuleContent']
      ),
      ...mapState('course', ['currentCourse']),

    }
    }
</script>

<style scoped>

</style>
