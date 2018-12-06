<template>
  <div id="popup">
      <h1 class="title">Work Sword</h1>
      <ip-transform></ip-transform>
      <angry-count></angry-count>
      <!-- <img src="~@/assets/ww.png" alt=""> -->
  </div>
</template>

<script>
import IpTransform from './ip-transform.vue';
import AngryCount from './angry-count.vue';
require('@/styles/reset.less');

export default {
  name: 'popup',
  components: {
    IpTransform,
    AngryCount
  }
}
</script>

<style lang="less">
#popup{
  width: 180px;
  height: 200px;
  .title{
    font-size: 14px;
    margin: 10px 10px 5px 10px;
    color: #1296db;
  }
  .option-item{
    cursor: pointer;
    font-size: 13px;
    padding: 8px 10px;
    display: flex;
    align-items: center;
    .icon{
      width: 20px;
      margin-right: 10px;
      img{
        vertical-align: sub;
      }
    }
    &:hover{
      background: #eaebeb;
    }
  }
}
</style>
