/**
 * Created by Administrator on 2015/11/15 0015.
 */
function share(ac) {
    var config = $.ajax({
        url: "http://gobiiig.com/JSSDK?para=" + location.href.split('#')[0],
        type: "get"
    });
    var url="";
    config.then(function (configres) {
        wxconfig(configres);
    });
    function wxconfig(result) {
        wx.config({
            debug: false,
            appId: result.appId,
            timestamp: result.timestamp,
            nonceStr: result.nonceStr,
            signature: result.signature,
            jsApiList: [
                //'checkJsApi',
                "chooseImage",
                "previewImage",
                "uploadImage",
                "downloadImage"
            ]
        });
    }

    wx.error(function (res) {
        alert(res);
        // config��Ϣ��֤ʧ�ܻ�ִ��error��������ǩ�����ڵ�����֤ʧ�ܣ����������Ϣ���Դ�config��debugģʽ�鿴��Ҳ�����ڷ��ص�res�����в鿴������SPA�������������ǩ����
    });
    wx.chooseImage({
        count: 1, // Ĭ��9
        sizeType: ['original', 'compressed'], // ����ָ����ԭͼ����ѹ��ͼ��Ĭ�϶��߶���
        sourceType: ['album', 'camera'], // ����ָ����Դ����ỹ�������Ĭ�϶��߶���
        success: function (res) {
            var localIds = res.localIds; // ����ѡ����Ƭ�ı���ID�б�localId������Ϊimg��ǩ��src������ʾͼƬ
        }
    });
    wx.uploadImage({
        localId: '', // ��Ҫ�ϴ���ͼƬ�ı���ID����chooseImage�ӿڻ��
        isShowProgressTips: 1, // Ĭ��Ϊ1����ʾ������ʾ
        success: function (res) {
            var serverId = res.serverId; // ����ͼƬ�ķ�������ID
        }
    });
}

