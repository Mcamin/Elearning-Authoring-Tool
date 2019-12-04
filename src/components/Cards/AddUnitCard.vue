<template>
<b-card no-body>
  <template v-slot:header>
    <b-row>
      <b-col>
        <h4 class="mb-0">{{header}}</h4>
      </b-col>

<b-col >
  <font-awesome-icon :icon="['fas',icon]" size="2x" class="float-right" />
</b-col>
    </b-row>

  </template>
  <b-card-body>
    <b-card-text>
      <slot name="description"></slot>
    </b-card-text>
  </b-card-body>
</b-card>
</template>

<script>
    import { library } from '@fortawesome/fontawesome-svg-core'
    import { faBook, faQuestionCircle }  from '@fortawesome/free-solid-svg-icons'

    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

    library.add(
        faBook,
        faQuestionCircle,
    );
    export default {
        name: "AddContentCard",
        props:{
            header: {
                type: String,
                description: "Card title"
            },
            icon: {
                type: String,
                description: "Card icon"
            },
        },
        components:{
            'font-awesome-icon': FontAwesomeIcon
        }

    }
</script>

<style scoped>

</style>
