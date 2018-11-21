<template>
    <div>
        <section id="nav">
            <ul>
                <li v-for="(item) in items" v-bind:key="item.key"><a href="">{{item.value}}</a></li>
            </ul>
        </section>
    </div>
</template>

<script>
    export default {
         data() {
            return {
            items:[
                    {key :'0',value:'소개'},
                    {key :'1',value:'구성원소개'},
                    {key :'2',value:'학사안내'},
                    {key :'3',value:'입학'},
                    {key :'4',value:'학부광장'},
                    {key :'5',value:'자료실'},
                    {key :'6',value:'대학원'},
                    {key :'7',value:'교육공학인증'},
                    {key :'8',value:'학부서비스'}
                ],
            }
        }
    }
</script>

<style scoped>
@media (max-width:799px){
    #nav{
        display: none;
    }
}
@media only screen and (min-width : 1024px){
    #nav ul {
        display: flex;
        width: 80%;
        margin: 0 auto;
    }
    #nav ul li{
        flex : 1;
        text-align: center;
        padding: 10px 0;
        
    }
    #nav ul li a{
        color:black;
        text-decoration: none;
    }
    #nav ul li:hover{
        background-color: navy;
        color: #ffffff;
    }
    #nav ul li:hover a{
        color: #ffffff;
    }
}
</style>