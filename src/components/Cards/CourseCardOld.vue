<template>
  <a :href="target">
  <b-card no-body >

    <b-card-img  :src="imageSrc" :alt="title" bottom></b-card-img>

    <b-card-body>
      <b-card-title >{{title}}</b-card-title>
      <b-card-sub-title class="mb-2" v-if="languages">{{languages}}</b-card-sub-title>
    </b-card-body>
  </b-card>
  </a>
</template>
<script>
    export default {
        name: "card",
        props: {
            title: {
                type: String,
                description: "the course title title"
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
