<template>
    <div class="vip">
        <header-sub></header-sub>
        <div class="section margin">
            <h3>Obtain high-resolution images</h3><!--获取全分辨率图像-->
            <p>1 image = 1 time</p><!--1图像=1能量-->
            <div class="flex a-i">
                <div class="right">
                     <div class="title">Recharge account</div><!--订阅计划-->
                    <div class="price" v-show="radio2!=='other'"><span>${{selectRadio2 | Calculation}}</span>/time</div><!--图像-->
                    <div class="price" v-show="radio2==='other'"><span>Other programmes</span></div><!--图像-->
                    <div class="raidos">
                    <el-radio-group v-model="radio2" @change="changeRadio2">
                        <el-radio :label="item.planId" v-for="(item,index) in choseList" :key="index">
                            <span class="clear">
                                <span>{{item.creditsPerMonth}} times</span><!--能量/月-->
                                <span>${{item.price}}</span>
                                <span>${{item | Calculation}}/time</span>
                            </span>
                        </el-radio>
                        <!-- <el-radio  label="other">
                            <span class="clear">
                                <span>For corporate customers with high-volume or monthly plans, please contact us Purchase now</span>
                            </span>
                        </el-radio> -->
<!--                        <el-radio :label="99">企业-联系我们</el-radio>-->
                    </el-radio-group>
                    </div>
                    <el-button type="primary" round @click="dialogVisible=true">{{radio2!=='other' ? 'Purchase Now' : 'Contact us'}}</el-button><!--立即购买-->
                    <div class="lasts">
                        <p>*There is no expiration date for the purchased usage</p>
                        <div>Sign up and get 10 free downloads. <span class="cu" @click="userRegest">Register now</span></div>
                        <div style="margin-top: 10px">Invite friends to sign up and get 20 free downloads. <a  href="userCenter.html#/userCenter/invitation">Invite now</a></div>
                    </div>
                </div>
            </div>
        </div>
        <footer-sub></footer-sub>
        <el-dialog
                @close="closeDlog"
                custom-class="Dlog"
                :close-on-click-modal="false"
                :visible.sync="dialogVisible"
                width="400px">
            <div class="Dcontent">
                <div class="title">{{selectRadio2!=='other' ? `Recharge account：${selectRadio2.creditsPerMonth} time` : 'Contact us for private chat~'}}</div><!--订阅计划-{{selectRadio2.creditsPerMonth}}能量/月-->
                <div class="price" v-if="selectRadio2!=='other'">${{selectRadio2.price}}</div>
<!--                <p><i class="el-icon-minus"></i>&nbsp; 请选择您的地址 &nbsp;<i class="el-icon-minus"></i></p>-->
<!--                <el-select v-model="value" placeholder="请选择">-->
<!--                    <el-option-->
<!--                            v-for="(item,index) in options"-->
<!--                            :key="index"-->
<!--                            :label="item.label"-->
<!--                            :value="item.value">-->
<!--                    </el-option>-->
<!--                </el-select>-->
                <!-- <img :src="ermUrl" alt="" :class="{imgs : ermUrl!==successImg}"> -->
                <!-- <p v-if="selectRadio2!=='other' && ermUrl!==successImg">Wechat code scanning payment</p> -->
<!--                <p>time</p>-->
                <el-button @click="userContinue">Continue</el-button><!--继续-->
            </div>
        </el-dialog>
    </div>
</template>

<script>
    import headerSub from '@/components/header/index.vue'
    import footerSub from '@/components/footer/index.vue'
    import { subscriptionPlans, userCreatePayment, judgeIsPaly, getQrCode } from "../../apis";
    import {getToken} from "../../utils/auth";
    import { basrUrls } from "../../utils";
    import ewm from '../../assets/image/buyEwm.png'
    import successImg from  '../../assets/image/paySuccess.png'
    export default {
        name: 'vip',
        data () {
            return {
                ewm,
                successImg,
                choseList:[
                ],
                feedbackList:[
                    // {name:'王女士',tag:'跨境店铺店主',content:'他能帮我快速处理图片背景，节约了我大量的时间，让我有更多的时间运营我的店铺，并且他处理图片背景的效果非常强大。',img:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3677209778,3519789803&fm=27&gp=0.jpg'},
                    // {name:'王女士',tag:'跨境店铺店主',content:'他能帮我快速处理图片背景，节约了我大量的时间，让我有更多的时间运营我的店铺，并且他处理图片背景的效果非常强大。',img:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3677209778,3519789803&fm=27&gp=0.jpg'},
                    // {name:'王女士',tag:'跨境店铺店主',content:'他能帮我快速处理图片背景，节约了我大量的时间，让我有更多的时间运营我的店铺，并且他处理图片背景的效果非常强大。',img:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3677209778,3519789803&fm=27&gp=0.jpg'},
                    {name:'Ms. Wang',tag:'Cross-border e-commerce business owner',content:'Picup helps me quickly process the foreground of the picture, saving me a lot of time, giving me more time to run my business, and the effect on the processed pictures is very amazing!',img:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3677209778,3519789803&fm=27&gp=0.jpg'},
                    {name:'Ms. Wang',tag:'Cross-border e-commerce business owner',content:'Picup helps me quickly process the foreground of the picture, saving me a lot of time, giving me more time to run my business, and the effect on the processed pictures is very amazing!',img:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3677209778,3519789803&fm=27&gp=0.jpg'},
                    {name:'Ms. Wang',tag:'Cross-border e-commerce business owner',content:'Picup helps me quickly process the foreground of the picture, saving me a lot of time, giving me more time to run my business, and the effect on the processed pictures is very amazing!',img:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3677209778,3519789803&fm=27&gp=0.jpg'},
                ],
                radio:1,
                radio2:1,
                dialogVisible: false,
                value:'1',
                options:[
                    {label:'中国',value:'1'},
                    {label:'美国',value:'2'},
                    {label:'德国',value:'3'},
                    {label:'英国',value:'4'},
                    {label:'澳大利亚',value:'5'},
                    {label:'新加坡',value:'6'},
                ],
                selectRadio2:{},
                selectRadio:{},
                basrUrls:basrUrls(),
                ermUrl:'',
                orderId:'',
                timer:''
            }
        },
        computed:{

        },
        watch:{

        },
        mounted(){
            this.getPlansList()
        },
        methods:{
            changeRadio2(e){
                if(e==='other')this.selectRadio2='other';
                else this.selectRadio2=this.choseList.filter(val=>val.planId == e)[0]

            },
            getPlansList(){
                subscriptionPlans().then(res=>{
                    if(!res.code){
                        this.choseList=res.data
                        this.radio2=res.data[0].planId
                        this.changeRadio2(this.radio2)
                    }
                })
            },
            userRegest(){
                if(getToken()){
                    this.$message({message:'You have already registered!',type:'success'})
                    return
                }
                    window.location.href=`${this.basrUrls}/loginOrRegister.html#/?type=1`
            },
            userContinue(){
                if(!getToken()) window.location.href=`loginOrRegister.html#/?type=0`
                else{
                    const loading = this.$loading({
                        lock: true,
                        text: 'Processing, please wait a moment...',
                        spinner: 'el-icon-loading',
                        background: 'rgba(0, 0, 0, 0.7)'
                    });
                    userCreatePayment({planId:this.selectRadio2.planId}).then(res=>{
                        if(!res.code){
                            window.location.href=res.data
                            loading.close()
                        }
                    })
                }
            },
            tobuyitem(){
                if(this.radio2==='other'){
                    this.dialogVisible=true
                    this.ermUrl=this.ewm
                    return
                }
                if(!getToken())window.location.href='loginOrRegister.html#/?type=1';
                else {
                    const loading = this.$loading({
                        lock: true,
                        text: 'Order generating...',
                        spinner: 'el-icon-loading',
                        background: 'rgba(0, 0, 0, 0.7)'
                    });
                    userCreatePayment({planId:this.selectRadio2.planId}).then(res=>{
                        if(!res.code){
                            window.location.href=res.data
                            loading.close()
                            // this.orderId=res.data.orderId
                            // getQrCode({codeUrl:res.data.codeURL}).then(res=>{
                            //     if(!res.code){
                            //         this.ermUrl=res.data;
                            //         this.dialogVisible=true;
                            //         this.checkStatus()
                            //         loading.close()
                            //    }
                            // })
                        }
                    })
                    // this.dialogVisible=true
                }
            },
            checkStatus(){
                judgeIsPaly({orderId:this.orderId}).then(res=>{
                    if(res.data)this.ermUrl=this.successImg
                    else{
                       this.timer= setTimeout(()=>{
                            this.checkStatus()
                        },2000)
                    }
                })
            },
            closeDlog(){
                clearInterval(this.timer)
            },
            goUserCenter(){
                window.location.href='userCenter.html'
            }
        },
        components:{
            headerSub,footerSub
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.section{
    padding-top: 152px;
    text-align: center;
    margin-bottom: 108px;
    .flex{
        justify-content: space-around;
    }
    h3{
        font-family: "Microsoft YaHei";
        font-size: 44px;
        color: #333;
        font-weight: 500;
        margin-bottom: 28px;
    }
    & > p{
        font-size: 16px;
        color: #626262;
        margin-bottom: 40px;
    }
    .left,.center,.right{
        width: 800px;
        overflow: hidden;
        border-radius: 15px;
        text-align: center;
        background-color: #fff;
        padding-bottom: 60px;
        .title{
            font-size: 24px;
            color: #7b7b7b;
            margin: 50px 0 37px;
        }
        .raidos{
            padding: 0 130px 0 150px;
        }
        .price{
            font-size: 12px;
            color: #e82255;
            margin-bottom: 34px;
            line-height: 1;
            span{
                font-size: 30px;
            }
        }
        .el-radio-group{
            text-align: left;
            display: block;
            padding: 0 24px;
            color: #a2a2a2;
            .el-radio{
                width: 100%;
                height: 32px;
                &:last-child{
                    margin-bottom: 14px;
                }
            }

        }
        .clear span{
            display: inline-block;
            width: 31%;
            color: #333;
            &:last-child{
                text-align: right;
            }
            &:nth-child(2){
                text-align: center;
            }
        }
        .el-button{
            background-color: #e82255;
            width: 160px;
            border-color: #e82255;
            margin-top: 54px;
            margin-bottom: 20px;
        }
        .lasts{
            p{
                margin-bottom: 10px;
                color: #e82255
            }
            font-size: 14px;
            span,a{color: $to}
        }
        & > p{
            font-size: 12px;
            color: #c6c6c6;
            margin-bottom: 93px;
            line-height: 1;
        }
        .share{
            font-size: 14px;
            line-height: 1;
            color: #333;
            margin-bottom: 55px;
        }
    }
    .left .price{
        font-size: 30px;
        color: #333;
    }
    .left .price.yi{
        width: 30px;
        margin: 0 auto 34px;
        padding: 15px 0;
        border-bottom:3px solid #333;
        height: 1px;
    }
}
  .Dcontent{
      .title{
          font-size: 20px;
          color: #5c5c5c;
          margin-bottom: 20px;
      }
      img{
          display: block;
          margin: 15px auto;
      }
      .imgs{
          width: 180px;
      }
      .price{
          font-size: 24px;
          color: #e82255;
          margin-bottom: 25px;
      }
      & > p{
          font-size: 14px;
          color: #5c5c5c;
          margin-bottom: 28px;
          line-height: 1;
          i{
              font-size: 20px;
              display: inline-block;
              vertical-align: middle;
          }
      }
      .el-select{
          display: block;
          margin-bottom: 40px;
      }
      .el-button{
          border-color: #e82255;
          background-color: #e82255;
          color: #fff;
          margin-top: 20px;
      }
  }
</style>
<style lang="scss">
    .vip .right .clear span{
        color: #333;
    }
   .vip .el-radio__input.is-checked + .el-radio__label,.vip .el-radio{
        color: #a2a2a2;
    }
    .vip .el-radio__input.is-checked .el-radio__inner{
        border-color: #e82255;
        background-color: #e82255;
    }
    .vip  .el-dialog__body{
        padding: 16px 22px 32px;
        text-align: center;
    }
    .vip{
        .el-dialog{
            border-radius: 15px;
        }
        .el-dialog__headerbtn{
            top: 15px;
            right: 15px;
        }
    }
</style>
