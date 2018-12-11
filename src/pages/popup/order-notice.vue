<template>
  <div class="option-item">
        <span class="icon">
            <img src="~@/assets/bell.png" alt="生气+1" width="16px">
        </span>
        <span style="margin-right: 10px">点餐提醒</span>
        <input type="time" v-model="time" @blur="setTime" step="3600" max="17:00">
  </div>
</template>

<script>
export default {
  name: "OrderNotice",
  data () {
    return {
      time: ''
    }
  },
  methods: {
      setTime () {
        if (Number(this.time.replace(/:/,'')) > 1700) {
          return alert('点饭时间5点截止,提醒不生效');
        }
        localStorage.setItem('order_notice', this.time);
        // eslint-disable-next-line
        chrome.extension.getBackgroundPage().setClock(this.time);
      }
  },
  mounted() {
      this.time = localStorage.getItem('order_notice');
  }
};
</script>

<style lang="less">
</style>
