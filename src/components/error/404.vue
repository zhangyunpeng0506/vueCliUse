<template>
  <div class="err-content">
    <div class="message">{{message}}</div>
    <div class="warning">{{warning}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: '404',
      warning: '您访问的页面不存在，请联系管理员'
    }
  }
}
</script>

<style lang="less" scoped>
  .err-content{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .message{
      color: red;
      font-size: 25px;
    }
    .warning{
      font-size: 20px;
    }
  }
</style>