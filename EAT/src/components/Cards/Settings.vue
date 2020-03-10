<template>
  <b-card no-body>
    <b-card-body>
      <b-row  class='course-title-wrapper  p-5' style="background-color: #219678">
        <b-col cols="8">
          <h2 class="mt-1 mb-2 font-weight-bold">Element Title</h2>
          <p class="mb-0">Element Description</p>
        </b-col>
        <b-col cols="4" class="d-flex justify-content-end align-items-center">
          <b-button>Settings</b-button>
        </b-col>
      </b-row>
    </b-card-body>
  </b-card>

</template>

<script>
    export default {
        name: "SettingsCard"
    }
</script>

<style scoped>

</style>
