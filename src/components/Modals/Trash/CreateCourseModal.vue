<template>
  <b-modal :id="modalID" centered>
    <template v-slot:modal-header>
      <!-- Emulate built in modal header close button action -->
      <h5>Modal Header</h5>
      <div>icon</div>
    </template>
    <template v-slot:default="{ hide }">
      <p>Modal Body with button</p>
      <b-button @click="hide()">Hide Modal</b-button>
    </template>
    <template v-slot:modal-footer="{ ok, cancel, hide }">
      <b>Custom Footer</b>
      <!-- Emulate built in modal footer ok and cancel button actions -->
      <b-button size="sm" variant="success" @click="ok()">
        OK
      </b-button>
      <b-button size="sm" variant="danger" @click="cancel()">
        Cancel
      </b-button>
      <!-- Button with custom close trigger value -->
      <b-button size="sm" variant="outline-secondary" @click="hide('forget')">
        Forget it
      </b-button>
    </template>
  </b-modal>
</template>

<script>
    export default {
        name: "AddContentModel",
        props: {
            modalID: {
                type: String,
                description: "the id of the modal"
            },
            languages: {
                type: String,
                description: "the course languages",
            },
            target: {
                type: String,
                description: "the course path",

            },
            imageSrc:{
                type: String,
                description: "the course image",
            }

        }
    };
</script>
<style>
</style>
