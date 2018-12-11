var time = localStorage.getItem('order_notice') || ''; // 获取当前设置的通知时间
var interval = null;

if (window.Notification) {
    setClock();
}

function setClock (newTime) {
    if (newTime) time = newTime;
    clearInterval(interval);
    interval = setInterval(function(){
        let currentTime = (new Date()).getHours();
        if (currentTime < 17 && currentTime >= Number(time.substr(0, 2))) {
            new Notification('通知', {
                icon: 'icons/icons.png',
                body: '点饭时间到了!点饭时间到了!点饭时间到了!'
            });
            // clearInterval(interval);
        }
    }, 30 * 60 * 1000);
}