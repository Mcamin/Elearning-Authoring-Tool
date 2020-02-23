<template>
  <b-container fluid class=" mt-5  px-5 ">
    <DeleteModal :item="item"/>
    <b-button v-b-modal="'delete-modal'">Show Modal</b-button>
    <editor-content :editor="editor" />

  </b-container>
</template>

<script>
  // Import the editor
  import { Editor, EditorContent } from 'tiptap'
  import DeleteModal from "../../components/Modals/DeleteModal";
  export default {
    name: "playground",
    components: {DeleteModal,EditorContent  },
    data() {
      return {
        data:null,
        item:{
          title: "Css",
          type: "Modal"
        },
        editor:null
      };
    },
    mounted() {
      this.editor = new Editor({
        content: '<p>This is just a boring paragraph</p>',
      })
    },
    methods:{
      async fetch() {
        const {data} = await lessonRep.getAll();
        this.data = data;
      }
    },
    created(){
      this.fetch();
    },
    beforeDestroy() {
      this.editor.destroy()
    },
  };
</script>
<style>
  .ProseMirror{
    border: 1px solid #219678;
  }
</style>
