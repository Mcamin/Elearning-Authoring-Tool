<template>
  <b-modal id="token-modal"
           @hidden="resetParams"
           centered
           hide-footer>
    <template v-slot:modal-title>
      {{strings.headerTitle}}
    </template>
    <template v-slot:default="{ close }">
      <!-- Edit Form-->
      <b-container fluid>
        <b-row class="mb-3 mt-3">

          <b-form class="w-100">
            <!-- Link -->
            <b-form-group id="input-group-link" label="Link:" label-for="input-link">
              <b-form-input
                id="input-link"
                v-model="link"
                required
              />
            </b-form-group>
            <!-- End of Link -->
            <!-- Link -->
            <b-form-group id="input-group-shared-key" label="Shared key:" label-for="input-shared-key">
              <b-form-input
                id="input-shared-key"
                v-model="sharedKey"
                required

              />
            </b-form-group>
            <!-- End of Link -->
            <!-- Link -->
            <b-form-group id="input-group-consumer-key" label="Consumer key:" label-for="input-consumer-key">
              <b-form-input
                id="input-consumer-key"
                v-model="consumerKey"
                required
              />
            </b-form-group>
            <!-- End of Link -->

          </b-form>
          <b-container fluid class="px-0 mt-3">
            <b-row class="h-100 ml-2">
              <b-button class="float-right" @click="generateNewCredentials()">Generate new credentials</b-button>
            </b-row>
          </b-container>
        </b-row>
      </b-container>
      <!-- End Form-->
    </template>
  </b-modal>
</template>
<script>


  import {mapActions} from "vuex";
  import {bus} from "@/main";
  import keygen from "keygen";


  export default {
    name: "GenerateTokenModal",
    data() {
      return {
        currentElement:{},
        strings: {
            headerTitle: 'Generate Token',
        },
        elementType:'',
        elementId:'',
        link: '',
        sharedKey:'',
        consumerKey:''
      }
    },


    methods: {
      ...mapActions('interaction', {updateInteraction: 'updateInteraction'}),
      ...mapActions('lesson', {updateLesson: 'updateLesson'}),
      ...mapActions('section', {updateSection: 'updateSection'}),
      ...mapActions('module', {updateModule: 'updateModule'}),

      generateNewCredentials(){
        this.sharedKey = keygen.hex(9);
        this.consumerKey = keygen.hex(9);

      },
      resetParams() {
        this.elementType = '';
        this.elementId = '';
        this.link = '';
        this.consumerKey = '';
        this.sharedKey='';
      },

      async addCredentials() {


        let payload = {
          consumerKey: this.consumerKey,
          sharedKey: this.sharedKey
        };

        switch (this.elementType) {
          case 'Section':
            this.updateSection({
              targetSection: this.elementId,
              props: payload
            });

            break;
          case 'Module':
            this.updateModule({
              targetModule: this.elementId,
              props: payload
            });

            break;
          case 'Interaction':
            this.updateInteraction({
              targetInteraction: this.elementId,
              props: payload
            });

            break;
          case 'Lesson':
            this.updateLesson({
              targetLesson: this.elementId,
              props: payload
            });
            break;
        }

      },},

      created() {
        bus.$on('token-modal', (meta) => {
          this.$bvModal.show('token-modal');
          switch (meta.type) {
            case "Lesson":
                  this.link = process.env.VUE_APP_LTI_URL+'lessons/'+meta.id;
              break;
            case "Interaction":
              this.link = process.env.VUE_APP_LTI_URL+'interactions/'+meta.id;
              break;
            case "Section":
              this.link = process.env.VUE_APP_LTI_URL+'sections/'+meta.id;
              break;
            case "Module":
              this.link = process.env.VUE_APP_LTI_URL+'modules/'+meta.id;
              break;
              default:
                this.link = process.env.VUE_APP_LTI_URL+'courses/'+meta.id;
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
