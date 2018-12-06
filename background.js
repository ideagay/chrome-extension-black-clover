// 获取内网ip
function getIP() {
    return new Promise(function(reslove) {
        var RTCPeerConnection = window.RTCPeerConnection || window.webkitRTCPeerConnection || window.mozRTCPeerConnection;
        if (RTCPeerConnection) {
            var rtc = new RTCPeerConnection({ iceServers: [] });
            if (1 || window.mozRTCPeerConnection) {
                rtc.createDataChannel('', { reliable: false });
            };

            rtc.onicecandidate = function (evt) {
                if (evt.candidate) grepSDP("a=" + evt.candidate.candidate);
            };
            rtc.createOffer(function (offerDesc) {
                grepSDP(offerDesc.sdp);
                rtc.setLocalDescription(offerDesc);
            }, function (e) { console.warn("offer failed", e); });


            var addrs = Object.create(null);
            addrs["0.0.0.0"] = false;
            function updateDisplay(newAddr) {
                if (newAddr in addrs) return;
                else addrs[newAddr] = true;
                var displayAddrs = Object.keys(addrs).filter(function (k) { return addrs[k]; });
                for (var i = 0; i < displayAddrs.length; i++) {
                    if (displayAddrs[i].length > 16) {
                        displayAddrs.splice(i, 1);
                        i--;
                    }
                }
                reslove(displayAddrs[0]);
            }

            function grepSDP(sdp) {
                var hosts = [];
                sdp.split('\r\n').forEach(function (line, index, arr) {
                    if (~line.indexOf("a=candidate")) {
                        var parts = line.split(' '),
                            addr = parts[4],
                            type = parts[7];
                        if (type === 'host') updateDisplay(addr);
                    } else if (~line.indexOf("c=")) {
                        var parts = line.split(' '),
                            addr = parts[2];
                        updateDisplay(addr);
                    }
                });
            }
        };
    });
}
  

chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.create({
        url: 'dist/popup.html'
    });
    chrome.tabs.getSelected(null, function (tab) {
        console.log(tab.url);
        let url = tab.url;
        let regx = /localhost|127.0.0.1/;
        if (/localhost|127.0.0.1/.test(url)) {
            getIP().then(function(ip) {
                chrome.tabs.create({
                    url: url.replace(regx, ip)
                })
            });
        } else {
            alert('不是localhost地址');
        }
    });
    
  });


