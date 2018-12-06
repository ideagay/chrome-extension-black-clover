<template>
  <div class="ip-transform">
    <button @click="tranformIP">本地转内网ip</button>
  </div>
</template>

<script>
/* eslint-disable */
import getIP from '@/utils/getIP';

export default {
  name: "IpTransform",
  methods: {
    tranformIP () {
        getIP().then((ip) => {
            console.log(ip);
        });
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
.ip-transform{
  //
}
</style>
