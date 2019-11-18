<template>
  <b-card no-body bg-variant="info">
    <template v-slot:header>
      <h4 class="mb-0">{{title}}</h4>
    </template>
    <b-card-img bg-variant="info"
      src="https://placekitten.com/480/210" alt="Image" bottom></b-card-img>
    <b-card-body>
      <b-card-title >{{title}}</b-card-title>
      <b-card-sub-title class="mb-2" v-if="subTitle">{{subTitle}}</b-card-sub-title>
      <b-card-text  v-if="text">
       {{text}}
      </b-card-text>
    </b-card-body>
  </b-card>

</template>
<script>
    export default {
        name: "card",
        props: {
            title: {
                type: String,
                description: "Card title"
            },
            subTitle: {
                type: String,
                description: "Card subtitle"
            },
            type: {
                type: String,
                description: "Card type (e.g primary/danger etc)"
            },
            headerClasses: {
                type: [String, Object, Array],
                description: "Card header css classes"
            },
            bodyClasses: {
                type: [String, Object, Array],
                description: "Card body css classes"
            },
            footerClasses: {
                type: [String, Object, Array],
                description: "Card footer css classes"
            }
        }
    };
</script>
<style>
</style>
