<template>
    <div id="slide-tabs">
        <div class="panel">  
            <img
            v-bind:src="images[Math.abs(currentNumber) % images.length]"
            v-on:mouseover="stopRotation"
            v-on:mouseout="startRotation"
            />
            <div class="panel-content">
                <h1>{{  title[Math.abs(currentNumber)%title.length]  }}</h1>
                <p>{{  contents[Math.abs(currentNumber%contents.length)]  }}</p>
                
                <!-- <a v-bind:href="urls[Math.abs(currentNumber%urls.length)]" style="color:white;">바로가기</a> -->
            </div>     
            
        </div>
        <div class ="panel-tabs">
            <ul>
                <li><a href="#" onclick="currentDiv(1)"><div class="element demo"><i class="fas fa-laptop"></i> <h2>{{title[0]}}</h2></div></a></li>
                <li><a href="#" onclick="currentDiv(2)"><div class="element demo"><i class="fas fa-building"></i> <h2>{{title[1]}}</h2></div></a></li>
                <li><a href="#" onclick="currentDiv(3)"><div class="element demo"><i class="fas fa-graduation-cap"></i> <h2>{{title[2]}}</h2></div></a></li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
    data(){ 
        return {
            name: 'RegularButtons',
            images: [require('../../assets/slide_img1.jpg'),
            require('../../assets/slide_img2.jpg'),
            require('../../assets/slide_img3.jpg')
            ],
            title:[
                "IT 교육의 글로벌 메카","IT 윱합소프트웨어 인력양성사업", "컴퓨터공학부 SNS"
            ],
            contents:[
                "한국기술교육대학교 컴퓨터공학부 홈페이지에 오신 것을 환영합니다!",
                "글로벌 수준의 IT전문인력 양성 IT융합분야에 대한 국제적인 경쟁력 고취",
                "우리 대학 컴퓨터공학부 페이스북 홈페이지입니다."
            ],
            urls:[
                "https://cse.koreatech.ac.kr/",
                "https://itcsw.koreatech.ac.kr/",
                "https://www.facebook.com/%ED%95%9C%EA%B5%AD%EA%B8%B0%EC%88%A0%EA%B5%90%EC%9C%A1%EB%8C%80%ED%95%99%EA%B5%90-%EC%BB%B4%ED%93%A8%ED%84%B0%EA%B3%B5%ED%95%99%EB%B6%80-%ED%95%99%EC%83%9D%ED%9A%8C-456037184604459/"
            ],
            currentNumber: 0,
            timer: null            
        }
    },
    created: function () {
        this.startRotation();
    },

    methods: {
        startRotation: function() {
            this.timer = setInterval(this.next, 3000);
        },

        stopRotation: function() {
            clearTimeout(this.timer);
            this.timer = null;
        },

        next: function() {
            this.currentNumber += 1
        },
        prev: function() {
            this.currentNumber -= 1
        }
    }
};
</script>

<style scoped>
/* @media (max-width:799px){
    #slide-tabs{
        display: none;
    }
} */
@media only screen and (min-width : 1024px){
    
    #slide-tabs .panel{
        position: relative;
        z-index: -10;
        text-align: center;
        margin-bottom: 0;
    }
    #slide-tabs .panel img{
        width :90%;
        height: 700px;
    }
    #slide-tabs .panel .panel-content{
        width : 610px;
        position: absolute;
        top: 150px;
        left : 300px;
        border: 2px solid #244371;
        background-color: #244371;
        padding: 80px 50px;
        opacity: 0.8;
    }
    #slide-tabs .panel .panel-content h1{
        font-size: 1.4em;
        text-align: left;
        color: #ddd;
    }
    #slide-tabs .panel .panel-content p{
        font-size: 1.3em;
        text-align: left;
        color: #ffffff;
    }
    #slide-tabs .panel-tabs {
        position: relative;
        bottom: 20px;
        width:80%;
        margin:0 auto;
    }
    #slide-tabs .panel-tabs .element{
        text-align: center;
    }
    #slide-tabs .panel-tabs ul{
        height: 60px;
        background-color: #fff;
        display: flex;
        border: solid 1px #ffffff;
        box-shadow: 5px 5px 10px #aaaaaa;
    }
    #slide-tabs .panel-tabs ul li{
        flex : 1;
        padding: 10px 0;
        border-left: 1px solid #eeeeee;
    }
    #slide-tabs .panel-tabs ul li:last-of-type{
        border-right: 1px solid #eeeeee;
    }
    #slide-tabs .panel-tabs ul li:hover{
        background-color: navy;
        color: #ffffff;
    }
    #slide-tabs .panel-tabs ul li a{
        color: black;
        text-decoration: none;
    }
    #slide-tabs .panel-tabs ul li:hover a{
        color: #ffffff;
    }
    #slide-tabs .panel-tabs ul li i{
        font-size: 2.5em;
        display: inline-block;
    }    
    #slide-tabs .panel-tabs ul li h2{
        line-height: 2.5em;
        display: inline-block;
    }
    .fade-transition {
        transition: all 0.8s ease;
        overflow: hidden;
        visibility: visible;
        opacity: 1;
        position: absolute;
    }
    .fade-enter, .fade-leave {
        opacity: 0;
        visibility: hidden;
    }
}
</style>