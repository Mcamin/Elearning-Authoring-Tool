<template>
  <Draggable>
    <b-card no-body>
      <b-card-body class="pl-0 pr-2">
        <b-card-text>
          <b-container>
            <b-row>
              <b-col cols="1">
                <b-link class="column-drag-handle">
                  <font-awesome-icon :icon="['fas', 'bars']" size="xs"/>
                </b-link>
              </b-col>
              <b-col><span>Enter a question title here ...</span></b-col>
              <b-col cols="1" class="pr-3">
                <b-link class="column-drag-handle">
                <font-awesome-icon :icon="['fas', 'trash']" size="xs"/>
                </b-link>
              </b-col>
            </b-row>
          </b-container>
        </b-card-text>
      </b-card-body>
    </b-card>
  </Draggable>
</template>

<script>
    import {Draggable} from "vue-smooth-dnd";
    import {library} from '@fortawesome/fontawesome-svg-core'
    import {faBars, faTrash} from '@fortawesome/free-solid-svg-icons'
    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

    library.add(
        faBars,
        faTrash
    );
    export default {
        name: "Question",
        components: {
            Draggable,
            'font-awesome-icon': FontAwesomeIcon
        }


    }
</script>

<style scoped>

</style>
