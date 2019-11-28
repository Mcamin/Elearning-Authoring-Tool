<template>
  <a href="#NewCourse">
  <b-card no-body >
    <template v-slot:header>
      <h4 class="mb-0">Create a new course</h4>
    </template>

    <!-- https://bootstrap-vue.js.org/docs/components/form -->
    <b-card-body style="text-align: center;" >
      <span v-b-modal.modal-xl><i class="tim-icons icon-simple-add"/></span>
      <b-modal id="modal-xl" title="Create new course:">
            <div>
              <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                <!-- Title of Course-->
                <b-form-group id="input-group-1" label="Title:" label-for="input-1">
                  <b-form-input
                    id="input-1"
                    v-model="form.title"
                    required
                    placeholder="Web Development"
                  />
                </b-form-group>

                <!-- Description of Course-->
                <b-form-group id="input-group-2" label="Description" label-for="input-2">
                  <b-form-input
                    id="input-2"
                    v-model="form.description"
                    required
                    placeholder="This course is..."
                  />
                </b-form-group>

                <!-- Tags of Course-->
                <b-form-group id="input-group-3" label="Tags" label-for="input-3">
                  <b-form-input
                    id="input-3"
                    v-model="form.tags"
                    placeholder="Web,HTML,Angular"
                    required
                  />
                </b-form-group>

                <b-form-group id="input-group-4" label="Food:" label-for="input-4">
                  <b-form-select
                    id="input-4"
                    v-model="form.language"
                    :options="language"
                    required
                  />
                </b-form-group>

                <b-button type="submit" variant="primary" href="#createcourse">Submit</b-button>
                <b-button type="reset" variant="danger">Reset</b-button>
              </b-form>
              <b-card class="mt-3" header="Form Data Result">
                <pre class="m-0">{{ form }}</pre>
              </b-card>
            </div>
      </b-modal>
    </b-card-body>
  </b-card>
  </a>
</template>
<script>
      export default {
        data() {
          return {
            form: {
              title: '',
              description: '',
              tags: [],
              language: []
            },
            language: [{ text: 'Select One', value: null }, 'English', 'German', 'Russian'],
            show: true
          }
        },
        methods: {
          onSubmit(evt) {
            evt.preventDefault()
            alert(JSON.stringify(this.form))
          },
          onReset(evt) {
            evt.preventDefault()
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
        }
    };
</script>
<style>
</style>
