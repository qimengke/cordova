var app = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');
        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
        console.log('Received Event: ' + id);
    }
};
app.initialize();
window.onload = function() {
    document.getElementById('photo').onclick = function() {
        navigator.camera.getPicture(onSuccess, onFail, {
            quality: 100, //分辨率百分百 不压缩
            allowEdit: true, //图片可修改
            destinationType: Camera.DestinationType.DATA_URL //返回的图片值类型 二进制
        });

        function onSuccess(imageURI) {
            var image = document.getElementById('myImage');
            image.src = "data:image/jpeg;base64," + imageURI;
        }

        function onFail(message) {
            alert('Failed because: ' + message);
        }
    }
    document.getElementById('address').onclick = function() {
        var onSuccess = function(position) {
            alert('跳转页面  地图显示');
            //将经纬度传递给map页面
            window.location = 'map.html?w=' + position.coords.latitude + '&j=' + position.coords.longitude;
        };
        /*    纬度：北纬以十进制度（数字）
        经度：经度，以十进制度（数字）
        海拔：在椭球米位置的高度（数字）
        精度：在米的纬度和经度坐标的精度水平。（编号）
        altitudeAccuracy：海拔高度的精度水平米坐标。（数字）
        标题：行进方向，以度相对于真北顺时针计数指定。（编号）
        速度：设备，以每秒米指定的当前地速。（编号）*/
        // onError Callback receives a PositionError object
        //
        function onError(error) {
            alert('code: ' + error.code + '\n' + 'message: ' + error.message + '\n');
        }
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }
}