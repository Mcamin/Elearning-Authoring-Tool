<template>
  <b-modal
    id="modal-rename"
    ref="modal"
    title="Rename"
    @show="resetModal"
    @hidden="resetModal"
    @ok="handleOk"
  >
    <form ref="form" @submit.stop.prevent="handleSubmit">
      <b-form-group
        :state="nameState"
        label="Name"
        label-for="name-input"
        invalid-feedback="Name is required"
      >
        <b-form-input
          id="name-input"
          v-model="name"
          :state="nameState"
          required
        ></b-form-input>
      </b-form-group>
    </form>
  </b-modal>
</template>

<script>
export default {
    name: "RenameModal",
    props:{
         title:
             {type:String,
              required:true,
               description:"the file to rename"
             }
    }
}
</script>

<style scoped>

</style>
