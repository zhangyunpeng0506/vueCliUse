<template>
  <div>
    <h2>关于</h2>
  </div>
</template>

<script>
export default {
  name: "About",
  mounted() {
    console.log(this.$route.query);
  }
}
</script>

<style>

</style>