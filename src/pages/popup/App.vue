<template>
  <div id="popup">
      <h1 class="title">Black Clover</h1>
      <ip-transform></ip-transform>
      <order-notice></order-notice>
      <angry-count></angry-count>
      <!-- <img src="~@/assets/ww.png" alt=""> -->
  </div>
</template>

<script>
import IpTransform from './ip-transform.vue';
import AngryCount from './angry-count.vue';
import OrderNotice from './order-notice.vue';
require('@/styles/reset.less');

export default {
  name: 'popup',
  components: {
    IpTransform,
    AngryCount,
    OrderNotice
  },
  mounted() {
    // eslint-disable-next-line
    chrome.extension.sendMessage('hafodikjeieijggkikejgaanpngfgege', 'hello', function(res) {
      console.log(res);
    });
  },
}
</script>

<style lang="less">
#popup{
  width: 240px;
  height: 200px;
  .title{
    font-size: 14px;
    margin: 10px 10px 5px 10px;
    color: #515151;
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
