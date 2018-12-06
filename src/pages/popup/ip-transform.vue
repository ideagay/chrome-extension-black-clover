<template>
  <div class="option-item" @click="localToNetwork">
      <span class="icon">
        <img src="~@/assets/link.png" alt="本地转内网ip" width="20px" >
      </span>
        <span>local转换network</span>
  </div>
</template>

<script>
/* eslint-disable */
import getIP from '@/utils/getIP';

export default {
  name: "IpTransform",
  methods: {
    localToNetwork () {
        chrome.tabs.getSelected(null, (tab) => {
            let url = tab.url;
            let regx = /localhost|127.0.0.1/;
            if (regx.test(url)) {
                getIP().then((ip) => {
                    chrome.tabs.create({
                        url: url.replace(regx, ip)
                    })
                });
            } else {
                alert('不是localhost地址');
            }
        });
    }
  },
  mounted() {
    
  }
};
</script>

<style lang="less">
</style>
