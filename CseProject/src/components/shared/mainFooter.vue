<template>
    <div>
        <section id="footer">
            <!-- footer container -->
            <section id="footer-container">
                <!-- Quick Navigation -->
                <div class="qn">
                    <ul>
                        <li><a href=""><img src="../../assets/school_logo.png" alt=""></a></li>
                        <li><a href=""><img src="../../assets/mail.png" alt=""></a></li>
                        <li><a href=""><img src="../../assets/e-koreatech.png" alt=""></a></li>
                        <li><a href=""><img src="../../assets/itcsw_logo.png" alt=""></a></li>
                        <li><a href=""><img src="../../assets/sandan_logo.png" alt=""></a></li>
                    </ul>
                </div>
            </section>
            <!-- footer copyrights -->
            <section id="footer-copyrights">
                <div class="footer-contents">
                    <p>TEL (041) 560 1460 ~ 1461</p>
                    <p>FAX (041) 560 1462</p>
                    <address>(31253) 충청남도 천안시 동남구 병천면 충절로 1600 (가전리, 한국기술교육대학교) 컴퓨터공학부</address>
                    <p>copyrights &copy; 2018. ALL rights reserved </p>
                </div>                
                <div class="footer_logo">
                        <img src="../../assets/cse_logo_footer.png" alt="">
                </div>
            </section>
        </section>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    #footer{
        width:100%;
        background-color: #f2f4f7;
    }
    #footer .qn{
        width : 80%;
        margin : 0 auto;
    }
    #footer .qn ul{
        display: flex;
    }
    #footer .qn ul li{
        flex:1;
        text-align: center;
    }
    #footer .qn ul li img{
        width:150px;
    }
    #footer #footer-copyrights{
        display: flex;
        width:80%;
        margin:0 auto;
    }
    #footer #footer-copyrights .footer-contents{
        flex :7;
    }
    #footer #footer-copyrights .footer-img{
        flex :3;
    }

</style>