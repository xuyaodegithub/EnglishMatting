<template>
    <div class="products">
        <header-sub></header-sub>
        <div class="product margin">
            <div class="imgInpainting">
                <h3><!--Image inpainting-->Auto Portrait Segmentation</h3>
                <!--                <p>Restore the missing parts of photos in just a few seconds. Replace any portions (lost, deteriorated, or unwanted such as watermarks) of the pictures without being noticed.</p>-->
                <!--                <img src="../../assets/image/women.jpg" alt="">-->
                <p>Using artificial intelligence technology to automatically segment the avatar in the photo, the segmentation accuracy is high, and the speed is fast.  Hair-level matting and fine-grained analysis of the face and hair to achieve hair-level fine segmentation.  Whether  it is shawl hair or meatball head, it can be completely divided. It is suitable for applications in the scene of image synthesis such as changing the head of a photo, making an exclusive expression pack, etc.</p>
                <div class="flex">
                    <img src="../../assets/image/header_people.jpg" alt="">
                </div>
                <div class="flex deepname">
                    <p>Original Effect</p>
                    <p>Matting Effect</p>
                    <p>Composite Effect</p>
                </div>
                <a class="cancat"  href="mailto:pikachu@picup.ai">
                    <span>Contact Us:</span>Pikachu@picup.ai
                </a>
            </div>
            <div class="imgInpainting">
                <h3><!--Image inpainting-->Image Repair</h3>
                <!--                <p>Restore the missing parts of photos in just a few seconds. Replace any portions (lost, deteriorated, or unwanted such as watermarks) of the pictures without being noticed.</p>-->
                <!--                <img src="../../assets/image/women.jpg" alt="">-->
                <p>Recover lost parts of photos in seconds. Replace any part of the picture (missing, spoiled or unwanted parts, such as watermarks) without notice.</p>
                <div class="flex j-b">
                    <move-chunk :imgss="arrw"></move-chunk>
                    <move-chunk :imgss="arrg"></move-chunk>
                </div>
                <a class="cancat"  href="mailto:pikachu@picup.ai">
                    <span>Contact Us:</span>Pikachu@picup.ai
                </a>
            </div>
            <div class="super">
                <h3>Super Resolution</h3>
                <p>Need to increase the resolution of your poor-quality pictures? This is the right tool for you. Want to experience the stunning effects? Contact us now!</p>
                <!-- <p>需要提高劣质图片的分辨率吗？这是适合你的工具。想体验惊艳效果吗？现在联系我们！</p> -->
                <!--                <img src="../../assets/image/katong.jpg" alt="">-->
                <div class="flex" style="justify-content: center;">
                    <move-chunk :imgss="arrr"></move-chunk>
                </div>
                <a class="cancat"  href="mailto:pikachu@picup.ai">
                    <span>Contact Us:</span>Pikachu@picup.ai
                </a>
            </div>
            <div class="photoTouch">
                <h3>Automated photo retouching</h3>
                <!--                <p>No time to edit your photos? This AI powered tool can enhance the aesthetic quality of pictures with just a single click. Anyone can become a pro without any hassle.</p>-->
                <p>Don't have time to edit photos? This artificial intelligence-driven tool can enhance the beauty of pictures with just one click. Anyone can become a professional player without trouble.</p>
                <!--                <img src="../../assets/image/water.jpg" alt="">-->
                <div class="flex j-b">
                    <move-chunk :imgss="arrm"></move-chunk>
                    <move-chunk :imgss="arrf"></move-chunk>
                </div>
                <a class="cancat"  href="mailto:pikachu@picup.ai">
                    <span>Contact Us:</span>Pikachu@picup.ai
                </a>
            </div>
            <div class="imgSeach">
                <h3><!--Reverse image search-->Reverse Image Retrieval</h3>
<!--                <p>Having dificultyt in describing what you want? This content based image retrieval tool helps you find related images for both personal and business (e.g. searching for similar or same products on e commerce platforms) uses. It' s quick and easy!</p>-->
                <p>Having difficulty in describing what you want? This content-based image retrieval tool helps you find relevant images for personal and business use (for example, searching for similar or identical products on e-commerce platforms). It's fast and easy!</p>
                <img src="../../assets/image/clother.jpg" alt="">
                <a class="cancat"  href="mailto:pikachu@picup.ai">
                    <span><!--Contact us-->Contact Us:</span>Pikachu@picup.ai
                </a>
            </div>
            <div class="transfer">
                <h3><!--Neural style transfer-->Image Style Transfer</h3>
<!--                <p>Transform photographs into artworks by applying appearance of style paintings to the content of user provided pictures. Creation of art pieces is easier than ever before!</p>-->
                <p>Convert photos into artwork by applying the look of a style painting to the content of a user-provided picture. Creating art is easier than ever!</p>
                <img src="../../assets/image/mounted.jpg" alt="">
                <a class="cancat"  href="mailto:pikachu@picup.ai">
                    <span>Contact Us:</span>Pikachu@picup.ai
                </a>
            </div>
            <div class="videoInpainting">
                <h3><!--Video inpainting-->Video repair</h3>
<!--                <p>Reconstruct the missing parts of video frames at fast speed. High quality results are generated on high definition videos, capturing dynamic textures and moving objects.</p>-->
                <p>Quickly reconstruct missing parts of a video frame. High-quality results are produced in high-definition video, capturing dynamic textures and moving objects.</p>
                <div class="flex videos a-i">
                    <div v-for="(item,index) in videoList" :key="index" @mouseenter="videoList[index].pause=true" @mouseleave="videoList[index].pause=false">
                        <video :src="item.item" muted ref="videoss" loop>
                            <source :src="item" type="video/mp4">
<!--                            <source :src="item" type="video/ogg">-->
<!--                            <source :src="item" type="video/webm">-->
                            Your browser doesn't support video playback. Try another one!
                        </video>
                        <img src="../../assets/image/play.png" alt="" v-show="item.pause && !item.status"  @click="palys(index)"  class="cu">
                        <img src="../../assets/image/stop.png" alt=""  v-show="item.status"  @click="palys(index)"  class="cu">
                    </div>
                </div>
                <div class="flex Vtext">
                    <span><!--Original video-->Original Video</span>
                    <span><!--Masked video-->Mask Video</span>
                    <span><!--Inpainted video-->Vanishing Video</span>
                </div>
                <a class="cancat"  href="mailto:pikachu@picup.ai">
                    <span>Contact Us:</span>Pikachu@picup.ai
                </a>
            </div>

            <div class="aiDesigner">
                <h3><!--AI designer-->Artificial Intelligence Designer</h3>
<!--                <p>Ever runs out of innovative ideas? This Generative Adversarial Network (GAN) powered AI designer helps you in many aspects of your work and life: haistyle design, handbag design, shoes design, and many more! No need to hallucinate by yourself anymore.</p>-->
                <p>Running out of creative ideas? This generative adversarial network (GAN)-driven artificial intelligence designer helps you in many aspects of your work and life: handbag design, shoe design, and more! No longer need to hallucinate yourself.</p>
                <div class="videoOne" @mouseenter="video4Pause=true" @mouseleave="video4Pause=false">
                    <video :src="video4" ref="video4" muted loop>
                        <source :src="video4" type="video/mp4">
<!--                        <source :src="video4" type="video/ogg">-->
<!--                        <source :src="video4" type="video/webm">-->
                        Your browser doesn't support video playback. Try another one!
                    </video>
                    <img src="../../assets/image/play.png" alt=""  @click="paly()" class="cu" v-show="video4Pause && !video4status">
                    <img src="../../assets/image/stop.png" alt=""  @click="paly()" class="cu" v-show="video4status">
                    <div class="zheA"></div>
                </div>
                <div><!--Dreamed shoes on the run-->Coveted shoes</div>
                <a class="cancat"  href="mailto:pikachu@picup.ai">
                    <span>Contact Us:</span>Pikachu@picup.ai
                </a>
            </div>
            <div class="face">
                <h3><!--Face recognition-->Face recognition</h3>
<!--                <p>Rapidly detecting and capturing the facial biometrics to identify a person, our face recognition technology based upon deep learning provides robust performance with superb accuracy. Even at low light conditions, reliable results are always achieved with the application of infrared spectrum. No pictures can cheat the system! It can be easily deployed in many categories such as security-law enforcement, health, marketing or retail.</p>-->
                <p>Our deep learning-based face recognition technology can quickly detect and capture facial biometrics to identify a person and provide powerful performance with extremely high accuracy. The application of infrared spectroscopy always yields reliable results, even under low light conditions. No picture can trick the system! It can be easily deployed in many areas such as security enforcement, health, marketing or retail.</p>
                <img src="../../assets/image/face.jpg" alt="">
                <a class="cancat"  href="mailto:pikachu@picup.ai">
                    <span>Contact Us:</span>Pikachu@picup.ai
                </a>
            </div>
            <div class="imageClass">
                <h3><!--Image classification with localization-->Image classification based on localization</h3>
<!--                <p>This product can not only assign a class label, but also show the location of an object in the image. Guess what, you don’t have to provide labelled data with object locations. Our model figures out the locations automatically for you. It will your work so much easier in various use cases: automobile, gaming, healthcare, retail, security, social media platform, and many more.</p>-->
                <p>This product can not only specify the class label, but also display the position of the object in the image. Guess what, you don't have to provide tagged data with object locations. Our model will automatically calculate the location for you. It will make your job easier in a variety of use cases: automotive, gaming, healthcare, retail, security, social media platforms, and more.</p>
                <img src="../../assets/image/computed.jpg" alt="">
                <a class="cancat"  href="mailto:pikachu@picup.ai">
                    <span>Contact Us:</span>Pikachu@picup.ai
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    import headerSub from '@/components/header/index.vue'
    import video1 from '@/assets/videos/video.mp4'
    import video4 from '@/assets/videos/shose.mp4'
    import MoveChunk from '@/components/movesChunk/index.vue'
    import w from '@/assets/image/women.jpg'
    import w2 from '@/assets/image/women2.jpg'
    import g from '@/assets/image/gift.jpg'
    import g2 from '@/assets/image/gift2.jpg'
    import m from '@/assets/image/m.jpg'
    import m1 from '@/assets/image/m1.jpg'
    import f from '@/assets/image/f.jpg'
    import f1 from '@/assets/image/f1.jpg'
    import r from '@/assets/image/r.jpg'
    import r1 from '@/assets/image/r1.jpg'
    export default {
        name: 'product',
        data () {
            return {
                videoList:[{item:video1,status:true,pause:false}],
                video4,
                video4status:true,
                video4Pause:false,
                // arrw:[w,w2,'Damaged picure','Recovered picture'],
                arrw:[w,w2,'Damaged Image','Recovered Image'],
                // arrg:[g,g2,'Picture with watermark',' picture with watermark removed'],
                arrg:[g,g2,'Watermarked Image','Watermark Removed'],
                // arrm:[m,m1,'Original picture','Enhanced picture'],
                arrm:[m,m1,'Original Image','Enhanced Image'],
                // arrf:[f,f1,'Original picture','Enhanced picture'],
                arrf:[f,f1,'Original Image','Enhanced Image'],
                // arrr:[r,r1,'Low resolution picture','High resolution picture'],
                arrr:[r,r1,'Low Resolution Image','High Resolution Image'],
            }
        },
        computed:{

        },
        watch:{

        },
        mounted(){

        },
        methods:{
            paly(){
                let video=this.$refs.video4
                if(video.paused)video.play()
                else video.pause()
                this.video4status=!this.video4status
            },
            palys(index){
                let video=this.$refs.videoss
                if(video[index].paused)video[index].play()
                else video[index].pause()
                this.videoList[index].status= ! this.videoList[index].status
            },
        },
        components:{
            headerSub,MoveChunk
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.product{
    padding-top: 80px;
    & > div{
        background-color: #fff;
        padding: 60px 70px 0;
        text-align: center;
        color: #636363;
        font-size: 14px;
        line-height: 28px;
        margin-bottom: 20px;
        h3{
            font-size: 28px;
            color: #333;
            margin-bottom: 34px;
            line-height: 1;
        }
        p{
            width: 920px;
            margin: 0 auto;
            /*word-wrap:break-word;*/
            /*word-break:break-all;*/
        }
    }
    .videoInpainting .videos{
        margin-top: 35px;
        justify-content: space-between;
        & > div{
            position: relative;
            width: 100%;
            img{
                position: absolute;
                top: 50%;
                left: 50%;
                margin: -25px 0 0 -25px;
            }
        }
        video{
            width: 100%;
            /*width: 340px;*/
            /*height: 240px;*/
            object-fit: fill;
        }
    }
    .videoInpainting{
        .Vtext{
            justify-content: space-between;
            text-align: center;
            padding: 20px 0 0 0;
            span{
                flex: 1;
            }
        }
    }
    .imgSeach .cancat{
        margin-top: 45px ;
    }
    .transfer .cancat{
        margin-top: 55px;
    }
    .transfer img{
        margin-top: 30px;
    }
    .imgSeach,.transfer,.videoInpainting,.aiDesigner,.face,.imageClass{
        padding-bottom:50px;
    }
    .imgInpainting .flex{
        margin: 42px 0 0 0;
    }
    .imgInpainting{
        padding-bottom: 57px;
    }
    .imgInpainting .deepname{
        margin-top: 0;
        line-height: 40px;
        p{
            flex: 1;
            text-align: center;
        }
    }


 .photoTouch .flex{
        margin:42px 0 0 0;
    }
    .photoTouch{
        padding-bottom: 50px;
    }
    .imageClass img{
        margin:46px 0 0 0;
    }
    .super .flex{
        margin:48px 0 0 0;
    }
    .super{
        padding-bottom: 44px;
    }
.aiDesigner .videoOne{
        width: 256px;
        position: relative;
        margin:48px auto 0 ;
    .zheA{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,.2);
        z-index: 10;
    }
    video{
        background-color: #cccccc;
    }
    img{
        position: absolute;
        top: 50%;
        left: 50%;
        margin: -25px 0 0 -25px;
        z-index: 22;
    }
    }
    .aiDesigner > div:nth-last-child(2){
        margin-top: 15px;
    }
.face{
    text-align: center;
    img{
        margin: 36px 0 0 0;
    }
}
    .cancat{
        display: block;
        width: 250px;
        margin: 40px auto 0;
        font-size:14px ;
        text-align: center;
        line-height: 40px;
        background-color: #e82255;
        color: #fff;
        border-radius: 20px;
        span{
            color: #e2e2e2;
            margin-right: 10px;
        }
    }
}

</style>

