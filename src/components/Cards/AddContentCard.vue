<template>
<b-card no-body>
  <template v-slot:header>
    <h4 class="mb-0">{{header}}</h4><p>{{icon}}</p>
  </template>
  <b-card-body>
    <b-card-text>
      {{description}}
    </b-card-text>
  </b-card-body>
</b-card>
</template>

<script>
    export default {
        name: "AddContentCard",
        props:{
            header: {
                type: String,
                description: "Card title"
            },
            icon: {
                type: String,
                description: "header icon"
            },
            description: {
                type: String,
                description: "card description"
            },
        }

    }
</script>

<style scoped>

</style>
