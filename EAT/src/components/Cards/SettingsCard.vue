<template>
  <b-card no-body bg-variant="primary"   class=" rounded course-title-wrapper ">
    <b-card-body>
      <b-row  class='p-5'>
        <b-col cols="8">
          <h1 v-if="meta.title" class="mt-1 mb-2 text-white font-weight-bold">{{meta.title}}</h1>
          <h5 class="mt-4" v-if="meta.description">{{meta.description}}</h5>
          <h5 class="mt-4" v-if="meta.tags">
            <b-badge pill variant="secondary" class="mx-1 px-3 py-2" v-for="(tag,index) in meta.tags" :key="index">{{tag}}
            </b-badge>
          </h5>

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
        name: "SettingsCard",
      props:{
          meta: {
            type: Object,
            required: true,
            description: "The element metadata "
          }
      }
    }
</script>

