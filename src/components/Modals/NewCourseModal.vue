<template>
  <b-modal
    id="modal-new-course"
    @show="handleReset"
    centered title="Create new course:"
    hide-footer size="lg">
    <template v-slot:default="{ close }">
      <b-form @submit.prevent="handleSubmit" >
        <!-- Title of Course-->
        <b-form-group id="input-group-title" label="Title:" label-for="input-title">
          <b-form-input
            id="input-title"
            v-model="formData.title"
            required
            placeholder="Web Development"
          />
        </b-form-group>
        <!-- End Title of Course-->

        <!-- Description of Course-->
        <b-form-group id="input-group-desc" label="Description" label-for="input-description">
          <b-form-textarea
            id="input-description"
            v-model="formData.description"
            required
            rows="2"
            max-rows="6"
            placeholder="This course is..."
          />
        </b-form-group>
        <!-- End Description of Course-->

        <!-- Category selection -->
        <b-form-group id="input-group-category" label="Category:" label-for="input-category">
          <b-form-select
            id="input-category"
            v-model="formData.selectedCategory"
            :options="categoriesSelector"
            required
          />
        </b-form-group>
        <!-- End Category selection -->

        <!-- Tags of the Course -->
        <b-form-group id="input-group-tags" label="Tags" label-for="input-tags">
          <vue-tags-input
            v-model="tag"
            :tags="formData.tags"
            :allow-edit-tags="true"
            @tags-changed="newTags => formData.tags = newTags"
          />
        </b-form-group>
        <!-- End Tags of the Course -->

        <!-- Language selection -->
        <b-form-group id="input-group-languages" label="Language:" label-for="input-4">
          <b-form-select
            id="input-language"
            v-model="formData.selectedLanguage"
            :options="languagesSelector"
            required
          />
        </b-form-group>
        <!-- End Language selection -->

        <!-- Upload Thumbnail -->
        <el-upload
          ref="uploadImage"
          drag
          class="upload-wrapper text-center"
          :action="uploadImagePath"
          :file-list="fileList"
          :limit=1
          accept="image/*"
          :auto-upload="false"
          :multiple=false
        >
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">Drop an image here or <em>click to upload</em></div>
          <div class="el-upload__tip" slot="tip">jpg/png files with a size less than 1MB</div>
        </el-upload>
        <!-- End Upload Thumbnail -->

        <!-- Buttons -->
        <b-container fluid class="px-0 mt-3">
          <b-row class="h-100 d-flex align-content-center mx-auto">
            <b-button class="mr-auto" @click="handleAdvancedSettings()">Advanced Settings</b-button>
            <b-button class="mx-2" @click="close()">Cancel</b-button>
            <b-button @click="handleSubmit()">Create Course</b-button>
          </b-row>
        </b-container>
        <!-- Buttons -->
      </b-form>
    </template>
  </b-modal>
</template>
<script>

  import {mapActions, mapState} from 'vuex';
  import VueTagsInput from '@johmun/vue-tags-input';
  import {uuid} from 'vue-uuid';

  export default {
    components: {
      VueTagsInput,
    },
    data() {
      return {
        uploadImagePath:process.env.VUE_APP_BASE_DOMAIN+"/image",
        tag: '',
        formData: {
          title: '',
          selectedCategory: null,
          description: '',
          tags: [],
          selectedLanguage: null,
        },
        fileList: [],
        languagesSelector: [
          {value: null, text: 'Please select a language'},
        ],
        categoriesSelector: [
          {value: null, text: 'Please select a category'},
        ],
      }
    },
    methods: {
      ...mapActions([
        'createCourse'
      ]),
      handleSubmit() {



        this.$refs.uploadImage.submit();
       /* const {title, description, tags, languageSelected, courseImage} = this.formData,
          id = uuid.v1();
        let tagstext = tags.map(tmpTag => {
            return tmpTag.text
          }),
          sectionID = "s-" + uuid.v1();
        const payload = {
          id,
          title,
          description,
          tagstext,
          languageSelected,
          thumbnail: {filename: "", path: courseImage},
          contentIndex: {[sectionID]: 0},
          content: [{
            id: sectionID,
            title: "New Section"
          }]
        };
        this.$router.push({ name: 'edit-course', params: {id: id, title: this.formData.title } });
        this.addSection({id: sectionID, title: "New Section"});
        this.addCourse(payload);
        this.saveTemporaryCourse(payload);*/
      },
      handleAdvancedSettings() {
        //Save form temporary in courseState and move to next page
        this.$router.push({name: 'courseAdvancedSettings'});
      },
      handleReset() {
        this.formData.title = '';
        this.formData.description = '';
        this.formData.tags = [];
        this.formData.selectedCategory = null;
        this.formData.selectedLanguage = null;
        this.formData.courseImage = [];
      },
    },
    computed: {
      ...mapState(['categories', 'languages'])
    },

    mounted() {
      this.languagesSelector.push(...this.languages);
      this.categoriesSelector.push(...this.categories);
    }
  }
</script>
<style lang="sass">
.bv-no-focus-ring
  .vue-tags-input
    max-width: 100%
    .ti-input
      border-radius: 0.25rem
      .ti-tag
        background-color: #219678
    &:focus
      border-color: #219678
      box-shadow: 0 0 0 0.2rem rgba(33, 150, 120, 0.25)
.form-control, .custom-select
  &:focus
    border-color: #219678
    box-shadow: 0 0 0 0.2rem rgba(33, 150, 120, 0.25)

.upload-wrapper
  .el-upload
    width: 100%
    .el-upload-dragger
      width: 100%
      &:hover
        border-color: #219678
      .el-upload__text em
        color: #219678
</style>
