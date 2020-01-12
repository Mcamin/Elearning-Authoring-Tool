<template>


    <b-modal id="add-section" centered title="Create new section:" hide-footer size="lg">

        <b-form @submit.prevent="handleSubmit" @reset.prevent="handleReset" v-if="show">
          <!-- Title of Course-->
          <b-form-group id="input-group-1" label="Section title:" label-for="input-title">
            <b-form-input
              id="input-title"
              v-model="formData.title"
              required
              placeholder="Web Development"
            />
          </b-form-group>




          <router-link :to="{ name: 'newcourse', params: {title: formData.title } }" type="submit" variant="primary" @click.native="handleSubmit"><b-button>Submit</b-button></router-link>

          <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>

    </b-modal>

</template>

<script>
  import AddContentCard from "../Cards/AddContentCard";
  import {mapActions} from "vuex";
    export default {
        name: "AddContentModel",
      data() {
                return {
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
        const { title} = this.formData;
       this.addSection({title:title});
      }
      }


    }
</script>
<style lang="css">
</style>
