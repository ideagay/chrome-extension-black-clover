<template>
  <div class="option-item">
        <span class="icon">
            <img src="~@/assets/angry.png" alt="生气+1" width="16px">
        </span>
        <span @click="addAngry">愤怒值+1<i class="badge" v-if="count" :title="count">{{count > 99 ? '99+' : count}}</i></span>
  </div>
</template>

<script>
export default {
  name: "AngryCount",
  data () {
      return {
          count: 0
      };
  },
  methods: {
      addAngry () {
          let count = localStorage.getItem('angry_count') || 0;
          localStorage.setItem('angry_count', ++count);
          this.count = localStorage.getItem('angry_count');
      }
  },
  mounted() {
      this.count = localStorage.getItem('angry_count');
  }
};
</script>

<style lang="less">
i.badge{
    background: #f56c6c;
    border-radius: 10px;
    display: inline-block;
    text-align: center;
    height: 18px;
    line-height: 18px;
    padding: 0 6px;
    color: #fff;
    font-size: 10px;
    margin-left: 15px;
    font-style: normal;
}
</style>
