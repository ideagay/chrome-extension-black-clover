<template>
    <div>
        <div class="option-item" @click="localToNetwork">
            <span class="icon">
                <img src="~@/assets/link.png" alt="本地转内网ip" width="20px">
            </span>
            <span>local转换network</span>
        </div>
        <img :src="img" alt="" v-show="img">
    </div>
</template>

<script>
/* eslint-disable */
import getIP from "@/utils/getIP";
import QRCode from "qrcode";

export default {
    name: "IpTransform",
    data () {
        return {
            img: ''
        }
    },
    methods: {
        localToNetwork() {
            chrome.tabs.getSelected(null, tab => {
                let url = tab.url;
                let regx = /localhost|127.0.0.1/;
                if (regx.test(url)) {
                    getIP().then(ip => {
                        url = url.replace(regx, ip);
                        QRCode.toDataURL(url).then(img => {
                            this.img = img;
                        }).catch(err => {
                            console.error(err);
                        });
                        // chrome.tabs.create({
                        //     url: url.replace(regx, ip)
                        // })
                    });
                } else {
                    alert("不是localhost地址");
                }
            });
        }
    }
};
</script>

<style lang="less">
</style>
