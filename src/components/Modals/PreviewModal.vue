<template>
  <b-modal id="modal-preview"  size="xl" centered hide-header hide-footer modal-class="modal-full">
    <b-embed
      style=" min-height: 100vh;"
      type="iframe"
      aspect="16by9"
      :src="previewObj"
      allowfullscreen
    >

    </b-embed>
  </b-modal>
</template>

<script>
    export default {
        name: "PreviewModal",
        data(){
            return{
                previewObj:'./data/previewComponent/index.html'

            }
        }
    }
</script>

<style scoped>
  .modal-full {
    min-width: 100%;
    margin: 0;
  }
</style>
