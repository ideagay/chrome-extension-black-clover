<template>
  <div id="popup">
      <ip-transform></ip-transform>
  </div>
</template>

<script>
import IpTransform from './ip-transform.vue';

export default {
  name: 'popup',
  components: {
    IpTransform
  }
}
</script>

<style lang="less">
#popup{
  width: 200px;
  height: 200px;
  background: #eee;
}
</style>
