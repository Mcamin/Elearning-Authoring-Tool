<template>
  <div class="simple-page">
    <Container @drop="onDrop" drag-handle-selector=".column-drag-handle">

      <!-- Questions -->
      <Draggable v-for="(item, id) in items" :key="item.id">
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

                  <b-col cols="8">
                    <!-- TODO: Add question title edit option in SingleMultipleChoiceSite-->
                    <b-col><span>{{item.name + ' ' + item.id}}</span></b-col>
                  </b-col>
                  <b-col cols="2 " class="pr-3">
                    <b-link @click="removeItem(id)" class="column-drag-handle">
                      <font-awesome-icon :icon="['fas', 'trash']" size="xs"/>
                    </b-link>
                  </b-col>
                </b-row>
              </b-container>
            </b-card-text>
          </b-card-body>
        </b-card>
      </Draggable>
    </Container>
    <!-- Add a question -->
    <div id="bottom">
      <el-button
        @click="addItem()"
        class="py-3 w-100"
        style="text-align:
        center">Add question</el-button>
    </div>
  </div>

</template>

<style scoped>
  .simple-page{
    position:relative;
  }
  #bottom{
    bottom:0px;
  }
</style>
<script>
  import { Container, Draggable } from 'vue-smooth-dnd'
  import {library} from '@fortawesome/fontawesome-svg-core'
  import {faBars, faTrash} from '@fortawesome/free-solid-svg-icons'
  import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
  import {applyDrag} from "../../utils/helpers";

  library.add(
    faBars,
    faTrash
  );
  let id=3;
  export default {
    name: 'DragHandle',
    components: {
      Container,
      Draggable,
      'font-awesome-icon': FontAwesomeIcon
    },
    data () {
      return {
        selected_radio: '',
        items: [
          { name: "John", text: "First choice", id: 0, checked: false },
          { name: "Joao", text: "Second choice", id: 1, checked: false },
          { name: "Jean", text: "Third Choice", id: 2, checked: false }
        ],
      }
    },
    methods: {
      addItem () {
        id++;
        this.items.push({ name:"New question" + id, text: "Enter new choice " + id, id, checked: false});
      },
      removeItem(id){
        this.items.splice(id, 1);
      },
      onDrop(dropResult) {
        this.items = applyDrag(this.items, dropResult);
      },
    }
  }
</script>
