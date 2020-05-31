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
      type: String | Object,
      default() {
        return '' || {}
      }
    },
    activeColor:{
      type:String,
      default:'blue'
    }
  },
  computed:{
    active(){
      /* js判断数据类型：
       * 方式一：typeof //typeof 1
       * 方式二：instanceof //(1).instanceof Number
       * 方式三：constructor  //(1).constructor===Number
       * 方式四：Object.prototype.toString  //Object.prototype.toString.call(1)
       */
      if(Object.prototype.toString.call(this.path).includes('Object')){        
        return this.$route.path.includes(this.path.path)?{color:this.activeColor,'border-bottom':`solid 1px ${this.activeColor}`}:{}
      }else{
        return this.$route.path.includes(this.path)?{color:this.activeColor,'border-bottom':`solid 1px ${this.activeColor}`}:{}
      }
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