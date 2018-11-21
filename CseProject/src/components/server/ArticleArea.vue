<template>
    <div>
        <section id="content">
            <div id="recent_board">
                <!-- (div>p.title+ul>(li>a{최근게시물$})*7)*3 -->
                <div class="row">
                    <div v-for="(item) in items" v-bind:key="item.key" class="board_area">
                        <h1 class="title">{{item.value}}<a href="#"><i class="far fa-plus-square"></i></a></h1>
                        <ul>
                            <li><a href="">최근게시물1</a><span>11-09</span></li>
                            <li><a href="">최근게시물2</a><span>11-09</span></li>
                            <li><a href="">최근게시물3</a><span>11-09</span></li>
                            <li><a href="">최근게시물4</a><span>11-09</span></li>
                            <li><a href="">최근게시물5</a><span>11-09</span></li>
                            <li><a href="">최근게시물6</a><span>11-09</span></li>
                            <li><a href="">최근게시물7</a><span>11-09</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        data() {
            return {
            items:[
                    {key :'0',value:'PLATUM'},
                    {key :'1',value:'전자신문'},
                    {key :'2',value:'TECHCRUNCH'}
                ],
            }
        }
    }
</script>

<style scoped>
@media (max-width:799px){
    #content{
        display: none;
    }
}
@media only screen and (min-width : 1024px){
#recent_board .board_area{
        background-color: #fff;
        border:1px solid #d6d6d6;
    }
    #recent_board .row{
        display: flex;
        width:80%;
        margin: 0 auto;
    }
    #recent_board .row .board_area{
        flex:1;
        position: relative;
        margin:3px;
    }
    #recent_board .board_area h1{
        font-size : 1.4em;
        font-weight: bold;
        margin: 10px;
        padding :10px;
        border-bottom: 3px solid navy;/*rgb(114, 111, 105);*/
    }
    #recent_board .board_area h1 i{
        font-size : 1.2em;
        position: absolute;
        color: rgb(114, 111, 105);
        right: 10px;
    }
    #recent_board .board_area h1 i:hover{
        color:navy;
    }
    #recent_board .board_area ul{
        list-style: disc;
        padding-left:20px;
    }
    #recent_board .board_area ul li{
        padding: 6px 0;
        font-size: 1.1em;
    }
    #recent_board .board_area ul li a{
        
        color:black;
        text-decoration: none;
    }
    #recent_board .board_area ul li a:hover{
        color:navy;
        font-size: 1.1em;
    }
}
</style>