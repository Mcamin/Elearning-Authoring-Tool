<template>
  <b-modal id="token-modal"
           @hidden="resetParams"
           centered
           hide-footer>

    <template v-slot:modal-title>
      {{strings.headerTitle}}
    </template>

    <template v-slot:default>
      <!-- Generate Tokens Form-->
      <b-container fluid>
        <b-row class="mb-3 mt-3">

          <b-form class="w-100">
            <!-- Link -->
            <b-form-group id="input-group-link" label="Link:" label-for="input-link">
              <b-form-input
                id="input-link"
                v-model="link"
                disabled
              />
            </b-form-group>
            <!-- End of Link -->

            <!-- Shared key  -->
            <b-form-group id="input-group-shared-key" label="Shared key:" label-for="input-shared-key">
              <b-form-input
                id="input-shared-key"
                v-model="sharedKey"
                disabled
              />
            </b-form-group>
            <!-- End shared key  -->

            <!-- Consumer key -->
            <b-form-group id="input-group-consumer-key" label="Consumer key:" label-for="input-consumer-key">
              <b-form-input
                id="input-consumer-key"
                v-model="consumerKey"
                disabled
              />
            </b-form-group>
            <!-- End consumer  key -->

          </b-form>
          <b-container fluid class="px-0 mt-3">
            <b-row class="h-100 ml-2">
              <b-button class="float-right" @click="generateNewCredentials()">Generate new credentials</b-button>
            </b-row>
          </b-container>
        </b-row>
      </b-container>
      <!-- End Tokens Form-->
    </template>
  </b-modal>
</template>
<script>


  import {mapActions, mapGetters, mapState} from "vuex";
  import {bus} from "@/main";
  import keygen from "keygen";


  export default {
    name: "GenerateTokenModal",
    data() {
      return {
        strings: {
          headerTitle: 'Generate Token',
        },
        elementType: '',
        elementId: '',
        link: '',
        sharedKey: '',
        consumerKey: ''
      }
    },
    computed:{
      ...mapState('course',['currentCourse']),
      ...mapGetters('section',['getSectionByID']),
      ...mapGetters('module',['getModuleByID']),
      ...mapGetters('lesson',['getLessonByID']),
      ...mapGetters('lesson',['getInteractionByID']),
    },
    methods: {
      ...mapActions('interaction', {updateInteraction: 'updateInteraction'}),
      ...mapActions('lesson', {updateLesson: 'updateLesson'}),
      ...mapActions('section', {updateSection: 'updateSection'}),
      ...mapActions('module', {updateModule: 'updateModule'}),
      ...mapActions('course', {updateCourse: 'updateCourse'}),

      /**
       *  Generate credentials and add them to the tokens object within the element
       */
      generateNewCredentials() {
        this.sharedKey = keygen.hex(9);
        this.consumerKey = keygen.hex(9);
        this.addCredentials();

      },
      /**
       * Reset the modal data on close
       */
      resetParams() {
        this.elementType = '';
        this.elementId = '';
        this.link = '';
        this.consumerKey = '';
        this.sharedKey = '';
      },

      /**
       * Add the generated tokens to the element in the database
       * @returns {Promise<void>}
       */
      async addCredentials() {

        let payload = null;
        switch (this.elementType) {
          case 'Section':
            payload = this.getSectionByID(this.elementId).tokens;
            payload[this.sharedKey] = this.consumerKey;
            this.updateSection({
                targetSection: this.elementId,
                props: {tokens: payload}
              });

            break;
          case 'Module':
            payload = this.getModuleByID(this.elementId).tokens;
            payload[this.sharedKey] = this.consumerKey;
            this.updateModule({
              targetModule: this.elementId,
              props: {tokens: payload}
            });

            break;
          case 'Interaction':
            payload = this.getInteractionByID(this.elementId).tokens;
            payload[this.sharedKey] = this.consumerKey;
            this.updateInteraction({
              targetInteraction: this.elementId,
              props: {tokens: payload}
            });

            break;
          case 'Lesson':
            payload = this.getLessonByID(this.elementId).tokens;
            payload[this.sharedKey] = this.consumerKey;
            this.updateLesson({
              targetLesson: this.elementId,
              props: {tokens: payload}
            });
            break;
          default:
            payload = this.currentCourse.tokens;
            payload[this.sharedKey] = this.consumerKey;
            this.updateCourse({
              targetCourse: this.elementId,
              props: {tokens: payload}
            });
        }

      },
    },
    created() {
      /**
       * Event Listener: Open the modal and initialize it
       */
      bus.$on('token-modal', (meta) => {
        this.$bvModal.show('token-modal');
        switch (meta.type) {
          case "Lesson":
            this.link = process.env.VUE_APP_LTI_URL + 'lessons/' + meta.id;
            break;
          case "Interaction":
            this.link = process.env.VUE_APP_LTI_URL + 'interactions/' + meta.id;
            break;
          case "Section":
            this.link = process.env.VUE_APP_LTI_URL + 'sections/' + meta.id;
            break;
          case "Module":
            this.link = process.env.VUE_APP_LTI_URL + 'modules/' + meta.id;
            break;
          default:
            this.link = process.env.VUE_APP_LTI_URL + 'courses/' + meta.id;
            break;

        }
        this.elementId = meta.id;
        this.elementType = meta.type;
        this.generateNewCredentials();

      });
    }
  }
</script>
<style scoped>


</style>
