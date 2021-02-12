<template>
  <div>
    <Navbar/>
    <Nuxt />
    <Footer/>
  </div>
</template>

<script>
import Navbar from "~/components/Navbar"
export default {
  components:{
    Navbar
  }
}
</script>
<style>
body {
  font-size: 13px;
  line-height: 19px;
  color: #111;
}
</style>
 