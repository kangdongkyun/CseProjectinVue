<template>
    <div id="slide-tabs">
        <div class="panel">            
            <img
                v-bind:src="images[Math.abs(currentNumber) % images.length]"
                v-on:mouseover="stopRotation"
                v-on:mouseout="startRotation"
                />
                <p>
                <a @click="prev">Previous</a> || <a @click="next">Next</a></p>
        </div>
    </div>
</template>

<script>
    export default {
    data(){ 
        return {
            images: [require('../../assets/slide_img1.jpg'),
            require('../../assets/slide_img2.jpg'),
            require('../../assets/slide_img3.jpg')
                ],
            currentNumber: 0,
            timer: null
        }
    },
    ready: function () {
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
@media only screen and (min-width : 1024px){
    
    /* #slide-tabs .panel{
        position: relative;
        z-index: -10;
        text-align: center;
        margin-bottom: 0;
    }
    #slide-tabs .panel img{
        width :90%;
        height: 700px;
    } */
    /* #slide-tabs .panel .panel-content{
        position: absolute;
        top:200px;
        left : 150px;
        border: 2px solid #244371;
        background-color: #244371;
        padding: 80px 50px;
        opacity: 0.7;
    } */
    /* #slide-tabs .panel .panel-content h1{
        font-size: 1.2em;
        color: #ddd;
    } */
    /* #slide-tabs .panel .panel-content p{
        font-size: 1.1em;
        color: #ffffff;
    } */
    /* #slide-tabs .panel-tabs {
        position: relative;
        bottom: 20px;
        width:80%;
        margin:0 auto;
    } */
    /* #slide-tabs .panel-tabs .element{
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
    } */
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