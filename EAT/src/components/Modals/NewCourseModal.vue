<template>
  <b-modal
    id="new-course-modal"
    ref="new-course-modal"
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
        <b-form-group id="input-group-languages" label="Language:" label-for="input-language">
          <b-form-select
            id="input-language"
            v-model="formData.selectedLanguage"
            :options="languagesSelector"
            required
          />
        </b-form-group>
        <!-- End Language selection -->
        <!-- Language selection -->
        <b-form-group id="input-group-duration" label="Duration in minutes:" label-for="input-duration">
          <b-form-input
            id="input-duration"
            type="number"
            v-model="formData.duration"
            placeholder="Course Duration"
          />
        </b-form-group>
        <!-- End Language selection -->
        <!-- Upload Thumbnail -->
        <el-upload
          ref="uploadImage"
          drag
          class="upload-wrapper text-center"
          action=" "
          :file-list="fileList"
          :limit=1
          :on-change="addImageToList"
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
          <b-row class="h-100 d-flex align-content-center justify-content-end  mx-auto">
            <b-button @click="handleSubmit()">Create Course</b-button>
            <b-button class="mx-2" @click="close()">Cancel</b-button>
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
        formData: {
          title: '',
          description: '',
          duration:null,
          tags: [],
          selectedCategory: null,
          selectedLanguage: null,
          image: null
        },
        tag: '',
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
      ...mapActions('course', {createCourse: 'createCourse'}),
      addImageToList (file, fileList) {
        // add Raw to fileList
        this.fileList = fileList;
        this.formData.image=fileList[0];
      },
      async handleSubmit() {

        const {title,duration,selectedCategory, description, tags, selectedLanguage, image} = this.formData,
          id = uuid.v1();
        let tagsText = tags.map(tmpTag => {
            return tmpTag.text
          }),
          languages = [selectedLanguage];

        //Create Course
        const payload = {
          uuid:id,
          title,
          duration,
          category:selectedCategory,
          languages,
          description,
          tags:tagsText,
          thumbnail:image,
          contentIndex: {},
        };
        try{
          await this.createCourse(payload);
        }
        catch (er) {
          console.log(er);
        } finally {
          this.$bvModal.hide('new-course-modal');
          this.$router.push({ name: 'edit-course', params: {id: id, title: this.formData.title } });
          this.handleReset();
        }
      },

      handleReset() {
        this.formData.title = '';
        this.formData.duration = null;
        this.formData.description = '';
        this.formData.tags = [];
        this.formData.selectedCategory = null;
        this.formData.selectedLanguage = null;
        this.formData.courseImage = [];
        this.fileList = [];
        this.tag = '';
      },
    },
    computed: {
      ...mapState(['categories', 'languages'])
    },

    mounted() {
      this.languagesSelector.push(...this.languages);
      this.categoriesSelector.push(...this.categories.map(cat => cat.label ));
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
