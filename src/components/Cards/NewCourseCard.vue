<template>
  <a href="#NewCourse">
  <b-card no-body >
    <template v-slot:header>
      <h4 class="mb-0">Create a new course</h4>
    </template>

    <!-- https://bootstrap-vue.js.org/docs/components/form -->
    <!-- TODO: Input Tags as Array -->
    <b-card-body style="text-align: center;" >
      <span v-b-modal.modal-xl><i class="tim-icons icon-simple-add"/></span>
      <b-modal id="modal-xl" title="Create new course:">
            <div>
              <b-form @submit.prevent="handleSubmit" @reset.prevent="handleReset" v-if="show">
                <!-- Title of Course-->
                <b-form-group id="input-group-1" label="Title:" label-for="input-1">
                  <b-form-input
                    id="input-1"
                    v-model="formData.title"
                    required
                    placeholder="Web Development"
                  />
                </b-form-group>

                <!-- Description of Course-->
                <b-form-group id="input-group-2" label="Description" label-for="input-2">
                  <b-form-input
                    id="input-2"
                    v-model="formData.description"
                    required
                    placeholder="This course is..."
                  />
                </b-form-group>

                <!-- Tags of Course-->
                <b-form-group id="input-group-3" label="Tags" label-for="input-3">
                  <b-form-input
                    id="input-3"
                    v-model="formData.tags"
                    placeholder="Web,HTML,Angular"
                    required
                  />
                </b-form-group>

                <b-form-group id="input-group-4" label="Language:" label-for="input-4">
                  <b-form-select
                    id="input-4"
                    v-model="formData.language"
                    :options="language"
                    required
                  />
                </b-form-group>

                <b-button type="submit" variant="primary" router-link to="/createcourse" @click.native="handleSubmit">Submit</b-button>
                <b-button type="reset" variant="danger">Reset</b-button>
              </b-form>
              <b-card class="mt-3" header="Form Data Result">
                <pre class="m-0">{{ formData }}</pre>
              </b-card>
            </div>
      </b-modal>
    </b-card-body>
  </b-card>
  </a>
</template>
<script>
  import {mapState, mapActions, ActionContext as store} from 'vuex'
  import newcourse from "../../data/newcourse";

  export default {
        data() {
          return {
            formData: {
              title: '',
              description: '',
              tags: '',
              language: []
            },
            language: [{ text: 'Select One', value: null }, 'English', 'German', 'Russian'],
            show: true
          }
        },
        methods: {
          ...mapActions([
            'addCourse'
          ]),
          handleSubmit() {
            const { title, description, tags, language } = this.formData
            const payload = {
              course: {
                title,
                description,
                tags,
                language
              }
            }
            this.addCourse(payload)
          },
          handleReset() {
            // Reset our form values
            this.form.title = ''
            this.form.description = ''
            this.form.tags = []
            this.form.language = []
            // Trick to reset/clear native browser form validation state
            this.show = false
            this.$nextTick(() => {
              this.show = true
            })
          }
        },
        computed : {
          ...mapState(
            ['courses']
          )
        }
    };
</script>
<style>
</style>
