<template>
  <div class="tab-bar-item" :style="active" @click="itemClick">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name:'TabBarItem',
  props:{
    path:{
      type:String,
      default:''
    },
    activeColor:{
      type:String,
      default:'blue'
    }
  },
  computed:{
    active(){
      return this.$route.path.includes(this.path)?{color:this.activeColor,'border-bottom':`solid 1px ${this.activeColor}`}:{}
    }
  },
  methods:{
    itemClick(){
      this.$router.replace(this.path)
    }
  }
}
</script>

<style lang="less" scoped>
  .tab-bar-item{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>