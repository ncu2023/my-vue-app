<template>
    <div class="container-fluid" style="margin-right: 0;">
        <div id="carouselExampleCaptions" class="carousel slide" style="overflow: hidden; margin: 0;">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="/src/assets/japan.jpg" style="height: 300px; overflow: hidden;" class="d-block w-100"
                        alt="...">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="/src/assets/japan2.jpg" style="height: 300px; overflow: hidden;" class="d-block w-100"
                        alt="...">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Second slide label</h5>
                        <p>Some representative placeholder content for the second slide.</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="/src/assets/japan3.jpg" style="height: 300px; overflow: hidden;" class="d-block w-100"
                        alt="...">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Third slide label</h5>
                        <p>Some representative placeholder content for the third slide.</p>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>

        <div class="row">
            <div class="col-3 d-none d-md-flex flex-column">
                <!-- <button type="button" class="btn btn-primary">Primary</button>
                <button type="button" class="btn btn-success">Success</button> -->
                <img src="/src/assets/japan2.jpg" class="card-img-top p-5"
                    style="width: 100%; height: 200px; object-fit: cover;" alt="...">
                <h3 class="mb-5">功能表</h3>

                <p><a class="link-opacity-75-hover" href="#">功能表選項1</a></p>
                <p><a class="link-opacity-75-hover" href="#">功能表選項2</a></p>
                <p><a class="link-opacity-75-hover" href="#">功能表選項3</a></p>
                <p><a class="link-opacity-75-hover" href="#">功能表選項4</a></p>
                <p><a class="link-opacity-75-hover" href="#">功能表選項5</a></p>
                <p><a class="link-opacity-75-hover" href="#">功能表選項6</a></p>
                <p><a class="link-opacity-75-hover" href="#">功能表選項7</a></p>
                <p><a class="link-opacity-75-hover" href="#">功能表選項8</a></p>
                <p><a class="link-opacity-75-hover" href="#">功能表選項9</a></p>
                <p><a class="link-opacity-75-hover" href="#">功能表選項10</a></p>

                <div class="d-flex flex-row justify-content-center align-items-center mt-5">
                    <button type="button" class="btn btn-primary me-3" style="height: 40px">Primary</button>
                    <button type="button" class="btn btn-success justify-content-center align-items-center" style="height: 40px">Success</button>
                </div>
            </div>

            <div class="col-12 col-md-9">
                <h2 class="mt-5">日本消息</h2>
                <div class="row">
                    <div class="col-12 col-md-6 p-5 text-start " style="height: 300px; overflow: hidden;">
                        <!-- <img src="/src/assets/japan.jpg" style="width: 100%; height: 100%; object-fit: cover;" /> -->
                        <h4>從日本寄包裹好輕鬆！日本郵局2021新制、寄件限制、費用、實用單字一次掌握</h4>
                        <h6>2023-11-01 15:00</h6>
                        <p>大家在日本走跳的時候一定曾經看過以紅色為主視覺色調的日本郵局（日本郵便），來到這除了可以購買日本限定明信片及各種可愛的限定商品，最重要的當然就是寄送信件甚至包裹到國外了。但對不懂日語的人來說郵局裡出現的詞彙究竟代表什麼意思光是要弄懂就好花時間！因此LIVE
                            JAPAN這次將為大家介紹在日本郵局常見的單字、用語介紹及實用會話，以後到日本無論是買郵票還是寄包裹都沒問題囉！</p>
                        <p>簡單來說就是在日本郵局寄包裹到其它國家時，無論是寄EMS／国際小包／小形包装物／国際eパケット（國際ePacket）／国際eパケットライト（國际ePacket
                            Light），都必須要事先用網路幫包裹填寫通關表單才行。以後從日本寄國際包裹就會有以下4個步驟</p>
                    </div>

                    <div class="col-12 col-md-6 p-5" style="height: 300px; overflow: hidden;">
                        <!-- <img src="/src/assets/japan2.jpg" style="width: 100%; height: 100%; object-fit: cover;" /> -->
                        <h4>這裡是日本嗎？有中國城又有一堆拉麵店的池袋好玩印象</h4>
                        <h6>2023-11-01 15:00</h6>
                        <p>位於東京的池袋，是一個擁有太陽城Sunshine
                            City、西武百貨、東急手創館等多間商業設施的繁華鬧區，也是許多外國人來到日本指定前往的街區。那麼外國人對於池袋都抱有怎麼樣的印象呢？這次訪問了實際去過池袋的外國人們對於池袋的感想，一起來看看池袋在他們心中是個什麼樣的地方吧！
                            （本文以下內容為受訪者的個人意見）</p>
                        <p>「雖然東京其它地方好像也是這樣，但車站和路上的行人真的都好多。尤其是從車站到太陽城那條路，我感覺不管什麼時間去永遠都這麼多人。」（義大利／女性）</p>
                        <p>「我被池袋車站的電車線如此之多給嚇一跳，完全不知道哪條路會通到哪條電車線去，要完全搞清楚還真的有點困難。」（澳洲／男性）</p>
                    </div>

                </div>

                <h2 class="mt-5">日本介紹</h2>
                <div class="row pe-3">
                    <div class="col-12 col-md-4 p-3 ps-4">
                        <div class="card" style="width: 100%;">
                            <img src="/src/assets/japan.jpg" class="card-img-top" alt="...">
                            <div class="card-body p-0 p-0" style="max-height: 300px">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text" style="max-height: 150px; overflow: hidden;">Some quick example text to
                                    build on the card title and make up the bulk
                                    of
                                    the card's content.</p>
                                <a href="#" class="btn btn-primary">GO</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-md-4 p-3 ps-4">
                        <div class="card" style="width: 100%;">
                            <img src="/src/assets/japan.jpg" class="card-img-top" alt="...">
                            <div class="card-body p-0">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text" style="max-height: 150px; overflow: hidden;">Some quick example text to
                                    build on the card title and make up the bulk
                                    of
                                    the card's content.</p>
                                <a href="#" class="btn btn-primary">GO</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-md-4 p-3 ps-4">
                        <div class="card" style="width: 100%;">
                            <img src="/src/assets/japan.jpg" class="card-img-top" alt="...">
                            <div class="card-body p-0">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text" style="max-height: 150px; overflow: hidden;">Some quick example text to
                                    build on the card title and make up the bulk
                                    of
                                    the card's content.</p>
                                <a href="#" class="btn btn-primary">GO</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-md-4 p-3 ps-4">
                        <div class="card" style="width: 100%;">
                            <img src="/src/assets/japan.jpg" class="card-img-top" alt="...">
                            <div class="card-body p-0">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text" style="max-height: 150px; overflow: hidden;">Some quick example text to
                                    build on the card title and make up the bulk
                                    of
                                    the card's content.</p>
                                <a href="#" class="btn btn-primary">GO</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-md-4 p-3 ps-4">
                        <div class="card" style="width: 100%;">
                            <img src="/src/assets/japan.jpg" class="card-img-top" alt="...">
                            <div class="card-body p-0">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text" style="max-height: 150px; overflow: hidden;">Some quick example text to
                                    build on the card title and make up the bulk
                                    of
                                    the card's content.</p>
                                <a href="#" class="btn btn-primary">GO</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-md-4 p-3 ps-4">
                        <div class="card" style="width: 100%;">
                            <img src="/src/assets/japan.jpg" class="card-img-top" alt="...">
                            <div class="card-body p-0">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text" style="max-height: 150px; overflow: hidden;">Some quick example text to
                                    build on the card title and make up the bulk
                                    of
                                    the card's content.</p>
                                <a href="#" class="btn btn-primary">GO</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-md-4 p-3 ps-4">
                        <div class="card" style="width: 100%;">
                            <img src="/src/assets/japan.jpg" class="card-img-top" alt="...">
                            <div class="card-body p-0">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text" style="max-height: 150px; overflow: hidden;">Some quick example text to
                                    build on the card title and make up the bulk
                                    of
                                    the card's content.</p>
                                <a href="#" class="btn btn-primary">GO</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-md-4 p-3 ps-4">
                        <div class="card" style="width: 100%;">
                            <img src="/src/assets/japan.jpg" class="card-img-top" alt="...">
                            <div class="card-body p-0">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text" style="max-height: 150px; overflow: hidden;">Some quick example text to
                                    build on the card title and make up the bulk
                                    of
                                    the card's content.</p>
                                <a href="#" class="btn btn-primary">GO</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- <h1>設定</h1> -->
        <!-- <div class="row">
            <img class="col-3" src="/src/assets/japan.jpg" />
            <img class="col-3" src="/src/assets/japan.jpg" />
            <img class="col-3" src="/src/assets/japan.jpg" />
            
            <div class="col-3 text-primary">
                Hi
                <button type="button" class="btn btn-primary">Primary</button>
                <button type="button" class="btn btn-success">Success</button>
            </div>
        </div> -->

        <!-- footer -->


        <!-- 側邊選單 -->
        <div class="d-md-none" style="position: fixed; top: 10px; left: 10px; z-index: 1" type="button"
            data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions">
           <img src="/src/assets/vue.svg" />
        </div>

        <div class="d-md-none offcanvas offcanvas-start"  data-bs-backdrop="false" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions"
            aria-labelledby="offcanvasWithBothOptionsLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">功能表</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                    <img src="/src/assets/japan2.jpg" class="card-img-top p-0 mb-5"
                        style="width: 100%; height: 150px; object-fit: cover;" alt="...">
                    
                    <p><a class="link-opacity-75-hover" href="#">功能表選項1</a></p>
                    <p><a class="link-opacity-75-hover" href="#">功能表選項2</a></p>
                    <p><a class="link-opacity-75-hover" href="#">功能表選項3</a></p>
                    <p><a class="link-opacity-75-hover" href="#">功能表選項4</a></p>
                    <p><a class="link-opacity-75-hover" href="#">功能表選項5</a></p>
                    <p><a class="link-opacity-75-hover" href="#">功能表選項6</a></p>
                    <p><a class="link-opacity-75-hover" href="#">功能表選項7</a></p>
                    <p><a class="link-opacity-75-hover" href="#">功能表選項8</a></p>
                    <p><a class="link-opacity-75-hover" href="#">功能表選項9</a></p>
                    <p><a class="link-opacity-75-hover" href="#">功能表選項10</a></p>

                    <button type="button" class="btn btn-primary m-3">Primary</button>
                    <button type="button" class="btn btn-success">Success</button>
            </div>
        </div>

    </div>

    <svg xmlns="http://www.w3.org/2000/svg" class="d-none">
        <symbol id="bootstrap" viewBox="0 0 118 94">
            <title>Bootstrap</title>
            <path fill-rule="evenodd" clip-rule="evenodd"
                d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z">
            </path>
        </symbol>
        <symbol id="facebook" viewBox="0 0 16 16">
            <path
                d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
        </symbol>
        <symbol id="instagram" viewBox="0 0 16 16">
            <path
                d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
        </symbol>
        <symbol id="twitter" viewBox="0 0 16 16">
            <path
                d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
        </symbol>
    </svg>

    <div class="container">
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <div class="col-md-4 d-flex align-items-center">
                <a href="/" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
                    <svg class="bi" width="30" height="24">
                        <use xlink:href="#bootstrap" />
                    </svg>
                </a>
                <span class="mb-3 mb-md-0 text-body-secondary">&copy; 2023 Company, Inc</span>
            </div>

            <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
                <li class="ms-3"><a class="text-body-secondary" href="#"><svg class="bi" width="24" height="24">
                            <use xlink:href="#twitter" />
                        </svg></a></li>
                <li class="ms-3"><a class="text-body-secondary" href="#"><svg class="bi" width="24" height="24">
                            <use xlink:href="#instagram" />
                        </svg></a></li>
                <li class="ms-3"><a class="text-body-secondary" href="#"><svg class="bi" width="24" height="24">
                            <use xlink:href="#facebook" />
                        </svg></a></li>
            </ul>
        </footer>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.container-fluid {
    padding: 0;
    min-height: fit-content;
}
</style>