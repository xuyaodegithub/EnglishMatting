<template>
    <div class="downLoadBtn" :class="{'objectType' : type===2}">
        <div class="flex a-i cu itemson"
             :style="style">
            <span class="el-icon-download" style="margin-right: 6px"></span>{{down ? 'edit' : 'download'}}<i
                class="el-icon-caret-bottom rotates" style="margin-left: 12px;transition: .3s all;"></i>
            <div class="sizeChose"
                 :class="{'lessTop' : !(imageMsg.previewWidth!==imageMsg.originalWidth || imageMsg.previewHeight!==imageMsg.originalHeight),'addBorder' : down}">
                <div class="flex a-i">
                    <span>size</span>
                    <span style="flex-grow: 1;">Consumption times</span>
                </div>
                <div class="flex a-i j-b">
                    <span>{{imageMsg.previewWidth + ' X ' + imageMsg.previewHeight}}</span>
                    <span>0</span>
                    <p @click="edireThis(0)">edit</p>
                    <span class="cu" @click="save(0,$event)">download</span>
                </div>
                <div class="flex a-i j-b"
                     v-if="imageMsg.previewWidth!==imageMsg.originalWidth || imageMsg.previewHeight!==imageMsg.originalHeight">
                    <span>{{imageMsg.originalWidth + ' X ' + imageMsg.originalHeight}}</span>
                    <span>1</span>
                    <p @click="edireThis(1)">edit</p>
                    <span class="cu" @click="save(1,$event)">download</span>
                </div>
                <div>
                    Current available times： {{userSubscribeData ? userSubscribeData.freeRemaining +
                    userSubscribeData.monthRemaining : 0}} <a href="userVip.html" class="cu">To recharge</a>
                </div>
            </div>
        </div>
        <!--                        && (imageMsg.previewWidth!==imageMsg.originalWidth && imageMsg.previewHeight!==imageMsg.originalHeight)"-->
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        name: "index",
        props: {
            imageMsg: Object,
            type:Number,
            down:Boolean
        },
        data() {
            return {}
        },
        computed:{
            ...mapGetters([
                'userSubscribeData'
            ]),
            style(){
                return {
                    backgroundColor:this.down ? '#fff' : this.type===1 ? '#e82255' : '#21a9e8',
                    color:this.down ? this.type===1 ? '#e82255' : '#21a9e8' : '#fff',
                    border:'1px solid #e82255',
                    borderColor:this.type===1 ? '#e82255' : '#21a9e8',
                }
            }
        },
        methods:{
            edireThis(k){
                this.$emit('edireThis',k)
            },
            save(k,e){
                this.$emit('save',k,e)
            }
        }
    }
</script>

<style scoped lang="scss">
    .downLoadBtn {
        /*width: 160px;*/
        text-align: left;
        margin: 25px 25px 0 0;
        position: relative;

        .itemson {
            background-color: #e82255;
            border-color: #e82255;
            border-radius:20px;
            justify-content:center;
            width: 120px;
            color: #fff;
            line-height: 36px;
            text-align: center;
        }

        .itemson:hover {
            background-color: rgba(232, 34, 85, .6);
            border-color: rgba(232, 34, 85, .6);
        }

        .itemson:hover .rotates {
            transform: rotateZ(180deg);
        }

        & > div:hover .sizeChose {
            display: block;
        }

        .sizeChose {
            display: none;
            position: absolute;
            border: 1px solid #efefef;
            border-radius: 10px;
            font-size: 12px;
            line-height: 30px;
            color: #ffffff;
            padding: 10px 6px;
            background-color: rgba(0, 0, 0, .9);
            left: -100px;
            top: -168px;
            z-index: 999;
            text-align: left;

            & > div {
                padding: 0 12px;
                margin-bottom: 8px;

                &:last-child {
                    text-align: left;
                    margin: 10px 0 0 0;

                    a {
                        border-bottom: 1px solid #a1a0a0;
                        margin-left: 10px;
                        color: #a1a0a0;
                    }

                    color: #a1a0a0;
                }

                &:first-child span:last-child {
                    border: 0;
                    text-align: left;
                    color: #a1a0a0;
                }

                &:first-child span {
                    color: #a1a0a0;
                }

                span {
                    width: 100px;

                    &:nth-child(2) {
                        width: 80px;
                    }

                    &:last-child {
                        border: 1px solid #e82255;
                        width: 80px;
                        line-height: 24px;
                        height: 24px;
                        border-radius: 13px;
                        text-align: center;
                        color: #e82255;
                    }
                }

                p {
                    margin-right: 20px;
                    color: $co;
                    white-space: nowrap;
                    width: 50px;
                    border-radius: 25px;
                    text-align: center;
                    line-height: 24px;
                }
            }

            .j-b:hover {
                background-color: rgba(255, 255, 255, .1);
            }
        }
        .addBorder > div {
            p{
                border: 1px solid #e82255;
            }
            span:last-child{
                border: 0;
            }
        }
        .sizeChose.lessTop {
            top: -130px;
        }
    }
    .downLoadBtn.objectType {
        .itemson {
            background-color: $to;
            border-color: $to;
        }
        .itemson:hover {
            background-color: rgba(33, 169, 232, .6);
            border-color: rgba(33, 169, 232, .6);
        }
        .sizeChose {
            & > div {
                &:first-child span:last-child {
                    border: 0;
                    color: #a1a0a0;
                }
                span {
                    &:last-child {
                        border: 1px solid $to;
                        color: $to;
                    }
                }
                p {
                    color: $to;
                }
                .addBorder{
                    border: 1px solid $to;
                }
            }
        }
        .addBorder > div {
            p{
                border: 1px solid $to;
            }
            span:last-child{
                border: 0;
            }
        }
    }
</style>
