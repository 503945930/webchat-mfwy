/**
 * Created by Administrator on 2015/12/7 0007.
 */
var site={
    name:String,//վ������
    AddressInfo:{province:String,city:String,district:String},//�û���ַ��Ϣ ʡ �� ��
    userInfo:{IDCard:String,age:{type: Number, default: 0},sex:String},//�û���Ϣ
    createInfo:{createTime: {type: Date, default: Date.now},people:String},
    updateInfo:{createTime: {type: Date, default: Date.now},people:String},
    states:{type:Boolean,default:true}//״̬

};

module.exports=site;