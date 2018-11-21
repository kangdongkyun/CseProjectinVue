<template>
    <div>
        <section id="header">
            <div id="gnb">
                <div class="top">
                    <ul>
                        <li><a href="#">Login</a></li>
                        <li><a href="#">SignUp</a></li>
                    </ul>
                </div>
                <div class="bottom">
                    <div class="logo">
                        <!-- <a href="#"><img src="../assets/O_cse_logo.png" alt=""></a> -->
                        <router-link to="/"><img src="@/assets/O_cse_logo.png" alt=""></router-link>
                    </div>
                    <div class="content">
                        <p>IT 교육의 글로벌 메카!</p>
                        <p>한국기술교육대학교 컴퓨터공학부</p>
                    </div>                
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
@media (max-width:799px){
    #header{
        display: none;
    }
}
@media only screen and (min-width : 1024px){
    #gnb {
        width: 80%;
        margin: 0 auto;
    }
    #gnb .top {
        text-align: right;
    }
    #gnb .top ul li {
        display: inline-block;
        text-align: center;
        font-size: 0.8em;
    }
    #gnb .bottom {
        display: flex;
        border-bottom: solid 3px navy;
    }
    #gnb .bottom div {
        flex: 1;
    }
    #gnb .bottom .content {
        text-align: right;
        padding-top: 20px;
        /* padding-right: 50px; */
    }
    #gnb .bottom .content p{
        font-size: 1.1em;
    }
}
</style>