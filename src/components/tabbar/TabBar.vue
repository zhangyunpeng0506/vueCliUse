<template>
  <div>
    <div class="tab-bar">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name:'TabBar',
}
</script>

<style lang="less" scoped>
  .tab-bar{
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 49px;
    background-color:#f6f6f6;
    box-shadow: 0px 1px 1px #f6f6f6;
  }
</style>