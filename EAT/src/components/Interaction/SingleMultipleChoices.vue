<template>

</template>

<style scoped>
  .el-input__suffix {
    right: 10px;
  }
</style>
<script>


  import {applyDrag} from "../../utils/helpers";

  library.add(
    faBars,
    faTrash
  );
  let id = 2;
  export default {
    name: 'DragHandle',
    components: {
      Container,
      Draggable,
      'font-awesome-icon': FontAwesomeIcon
    },

    data() {
      return {

      }
    },
    methods: {

    }
  }
</script>
