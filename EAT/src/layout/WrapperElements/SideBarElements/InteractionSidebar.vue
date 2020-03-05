<template>
 <b-container  class="h-100 d-flex px-0 flex-column  "  style="">

   <b-row  class="mx-0 mt-2">
     <b-col class="px-0">
       <!--<el-button class="w-100 pl-3 py-3 "
                  style="text-align: left">Interaction Title</el-button>-->
       <b-col class="mb-3">
         Lesson Title:
         <input :class="{view: !isEditing}" :disabled="!isEditing" ref="lesson_title" :value="lTitle"
                type="text" v-on:keyup.enter="toggleTitleInput">
         <a class="ml-2" href="#">
           <font-awesome-icon :icon="['fas', 'pen']" @click="isEditing = !isEditing" size="lg"
                              v-if="!isEditing"/>
           <font-awesome-icon :icon="['fas', 'save']" @click="toggleTitleInput" size="lg"
                              v-else-if="isEditing"/>
         </a>
       </b-col>
     </b-col>
   </b-row>

   <b-row  class="mx-0">
     <b-col class="px-0">
       <div class="pl-3 mt-3">
          Question Order
         <el-divider style="margin-bottom: 0px;"/>
       </div>
     </b-col>
   </b-row>
   <b-row  class="mx-0 h-100" style="overflow: auto">
     <b-col class="px-0">
       <Container @drop="onDrop"  drag-handle-selector=".column-drag-handle">
         <Question/>
       </Container>
     </b-col>
   </b-row>

<b-row  class="mt-auto mx-0">
   <b-col class="px-0">
     <el-button class=" py-3 w-100" style="text-align: center">Add Question</el-button>
   </b-col>
 </b-row>
 </b-container>
</template>

<script>

    import {Container } from "vue-smooth-dnd";
  import Question from "@/components/Interaction/Question"
    import { applyDrag } from "@/utils/helpers";
    import {library} from '@fortawesome/fontawesome-svg-core'
    import {faBars, faTrash} from '@fortawesome/free-solid-svg-icons'
    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
    library.add(
      faBars,
      faTrash
    );
  export default {
    name: "InteractionSidebar",
    data() {
      return {
        isEditing: false,
        lTitle: this.lessonTitle
      }
    },
      components:{
          Container,
          Question,
        'font-awesome-icon': FontAwesomeIcon,
        'foo': {
          template: '<h1>Foo component</h1>'
        },
      },
      methods:{
          onDrop(dropResult) {
              this.items = applyDrag(this.items, dropResult);
          },
        toggleTitleInput() {
          this.lTitle = this.$refs['lesson_title'].value;
          this.isEditing = !this.isEditing;
        }
      }
  }
</script>

<style lang="sass">
.el-button
  font-size: 18px!important
</style>
