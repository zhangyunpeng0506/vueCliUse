<template>
  <div>
    <h3>我是profile组件</h3>
    <button @click="log">获取数据</button>
  </div>
</template>

<script>
export default {
  name:'Profile',
  data(){
    return {
      profile:this.$route
    }
  },
  methods:{
    log(){
      console.log(this.profile)
    }
  }
}
</script>

<style>

</style>