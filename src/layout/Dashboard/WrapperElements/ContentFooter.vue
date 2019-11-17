<template>
  <footer class="footer">
    <b-container fluid>
      <div class="copyright">
        ©<a href="#" target="_blank" rel="noopener">Fraunhofer FOKUS</a> {{year}}
      </div>
      <b-nav>
        <b-nav-item  href="#"><i class="tim-icons"></i></b-nav-item>
        <b-nav-item  href="#"><i class="tim-icons "></i></b-nav-item>
      </b-nav>

    </b-container>
  </footer>
</template>
<style>

</style>
<script>
    export default {
        data() {
            return {
                year: new Date().getFullYear()
            }
        }
    };
</script>

<style lang="scss">
  .footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 3rem;     /* Footer height */
    background-color: #17a2b8;
  }
  .copyright {
    text-align: center;
  }
</style>
