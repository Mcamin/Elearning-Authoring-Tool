<template>
    <b-modal id="add-section-module" centered :title="headerTitle" hide-footer size="lg">
      <b-container>
        <b-row class="mb-3">
          <b-col>
            <b-card no-body style="max-width: 20rem;">

              <template v-slot:header>
                <font-awesome-icon :icon="['fas', 'list-alt']" size="lg"/>
              </template>

              <b-card-body>
                <b-card-title>{{addSection.title}}</b-card-title>
                <b-card-text>
                  {{addSection.description}}
                </b-card-text>
              </b-card-body>
            </b-card>
          </b-col>
          <b-col>
            <b-card no-body style="max-width: 20rem;">

              <template v-slot:header>
                <font-awesome-icon :icon="['fas', 'list-ul']" size="lg" />
              </template>

              <b-card-body>
                <b-card-title>{{addModule.title}}</b-card-title>
                <b-card-text>
                  {{addModule.description}}
                </b-card-text>
              </b-card-body>
            </b-card>
          </b-col>
          <b-col>
            <b-card no-body style="max-width: 20rem;">
              <template v-slot:header>
                <font-awesome-icon :icon="['fas', 'file-upload']" size="lg" />
              </template>

              <b-card-body>
                <b-card-title>{{importSectionModule.title}}</b-card-title>
                <b-card-text>
                  {{importSectionModule.description}}
                </b-card-text>
              </b-card-body>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </b-modal>
</template>
<script>
  import { library } from '@fortawesome/fontawesome-svg-core'
  import { faListUl, faListAlt,faFileUpload} from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


  library.add(
    faListUl,
    faListAlt,
    faFileUpload
  );

  import {mapActions} from "vuex";


    export default {
        name: "AddContentModel",
      components:{
      'font-awesome-icon': FontAwesomeIcon},
      data() {
        return {

          headerTitle:'Add a new Section/Module',
          addSection:{
            title:'Add Section',
            description: 'Add a section to the course to organize its structure'
          },
          addModule:{
            title:'Add Module',
            description: 'Add a Module to the course.'
          },
          importSectionModule:{
            title:'Import Section/Module',
            description: 'Import a section/module from the library'
          },
          id : null,
          formData: {
            title: '',
            },
          show:true
        }
      },
      methods:{
        ...mapActions([
          'addSection'
        ]),
      handleSubmit() {
        const id = this.$uuid.v4();
        const { title } = this.formData;
        this.addSection({
          id:id,
          title:title
          });
        }
      }
    }
</script>
<style lang="css">
</style>
