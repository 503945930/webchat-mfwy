/**
 * Created by Administrator on 2015/12/6 0006.
 */
/*������ */
var adv={
    name:String,//�ǳ�
    images:String,
    currentAdd:String,//��ǰλ�ñ�ʶ
    createInfo:{createTime: {type: Date, default: Date.now},people:String},
    updateInfo:{createTime: {type: Date, default: Date.now},people:String},
    states:{type:Boolean,default:true}//״̬

};

module.exports=adv;