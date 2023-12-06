<template>
    <section class="h-100 h-custom" style="background-color: #eee;">
        <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col">
                    <div class="card">
                        <div class="card-body p-4">
                            <div class="row">

                                <div class="col-lg-7">
                                    <h5 class="mb-3"><a href="#!" class="text-body"><i
                                                class="fas fa-long-arrow-alt-left me-2"></i>Continue shopping</a></h5>
                                    <hr>

                                    <div class="d-flex justify-content-between align-items-center mb-4">
                                        <div>
                                            <p class="mb-1">購物車</p>
                                            <p class="mb-0">You have {{shopCart.length}} items in your cart</p>
                                        </div>
                                        <div>
                                            <p class="mb-0"><span class="text-muted">Sort by:</span> <a href="#!"
                                                    class="text-body">price <i class="fas fa-angle-down mt-1"></i></a></p>
                                        </div>
                                    </div>

                                    <div v-for="item, index in shopCart" class="card mb-3">
                                        <div class="card-body">
                                            <div style="display: flex; justify-content: center; align-items: center; position: absolute; top: -16px; right: -16px; background-color: red; 
                                                width:32px; height: 32px; border-radius: 32px; color: white; cursor: pointer;" @click="onDelete(item.id, index)">X</div>
                                            <div class="d-flex justify-content-between">
                                                <div class="d-flex flex-row align-items-center">
                                                    <div>
                                                        <img :src="item.photoUrl"
                                                            class="img-fluid rounded-3" alt="Shopping item"
                                                            style="width: 65px;">
                                                    </div>
                                                    <div class="ms-3">
                                                        <h5>{{ item.title }}</h5>
                                                        <p class="small mb-0">{{ item.description }}</p>
                                                    </div>
                                                </div>
                                                <div class="d-flex flex-row align-items-center">
                                                    <div style="width: 50px;">
                                                        <input class="fw-normal mb-0" v-model="item.quantity" style="width: 100%" @keyup="onKeyUp($event, index)" />
                                                    </div>
                                                    <div style="width: 80px;">
                                                        <h5 class="mb-0">${{ item.price * item.quantity }}</h5>
                                                    </div>
                                                    <a href="#!" style="color: #cecece;"><i class="fas fa-trash-alt"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div class="col-lg-5">

                                    <div class="card bg-primary text-white rounded-3">
                                        <div class="card-body">
                                            <div class="d-flex justify-content-between align-items-center mb-4">
                                                <h5 class="mb-0">Card details</h5>
                                                <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                                                    class="img-fluid rounded-3" style="width: 45px;" alt="Avatar">
                                            </div>

                                            <p class="small mb-2">Card type</p>
                                            <a href="#!" type="submit" class="text-white"><i
                                                    class="fab fa-cc-mastercard fa-2x me-2"></i></a>
                                            <a href="#!" type="submit" class="text-white"><i
                                                    class="fab fa-cc-visa fa-2x me-2"></i></a>
                                            <a href="#!" type="submit" class="text-white"><i
                                                    class="fab fa-cc-amex fa-2x me-2"></i></a>
                                            <a href="#!" type="submit" class="text-white"><i
                                                    class="fab fa-cc-paypal fa-2x"></i></a>

                                            <form class="mt-4">
                                                <div class="form-outline form-white mb-4">
                                                    <input type="text" id="typeName" class="form-control form-control-lg"
                                                        siez="17" placeholder="Cardholder's Name"  v-model="cardName" />
                                                    <label class="form-label" for="typeName">Cardholder's Name</label>
                                                    <div v-if="isShowNameError" class="error-text">姓名不可為空</div>
                                                </div>

                                                <div class="form-outline form-white mb-4">
                                                    <input type="text" id="typeText2" class="form-control form-control-lg"
                                                        siez="17" placeholder="1234 5678 9012 3457" minlength="19"
                                                        maxlength="19" v-model="cardNo" />
                                                    <label class="form-label" for="typeText">Card Number</label>
                                                    <div v-if="isShowCardNoError" class="error-text">卡號不可小於16個數字</div>
                                                </div>

                                                <div class="row mb-4">
                                                    <div class="col-md-6">
                                                        <div class="form-outline form-white">
                                                            <input type="text" id="typeExp"
                                                                class="form-control form-control-lg" placeholder="MM/YYYY"
                                                                size="7" minlength="7" maxlength="7" />
                                                            <label class="form-label" for="typeExp">Expiration</label>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-outline form-white">
                                                            <input type="password" id="typeText"
                                                                class="form-control form-control-lg"
                                                                placeholder="&#9679;&#9679;&#9679;" size="1" minlength="3"
                                                                maxlength="3" />
                                                            <label class="form-label" for="typeText">Cvv</label>
                                                        </div>
                                                    </div>
                                                </div>

                                            </form>

                                            <hr class="my-4">

                                            <div class="d-flex justify-content-between">
                                                <p class="mb-2">Subtotal</p>
                                                <p class="mb-2">$4798.00</p>
                                            </div>

                                            <div class="d-flex justify-content-between">
                                                <p class="mb-2">Shipping</p>
                                                <p class="mb-2">$20.00</p>
                                            </div>

                                            <div class="d-flex justify-content-between mb-4">
                                                <p class="mb-2">Total(Incl. taxes)</p>
                                                <p class="mb-2">$4818.00</p>
                                            </div>

                                            <button type="button" class="btn btn-info btn-block btn-lg">
                                                <div class="d-flex justify-content-between">
                                                    <span @click.prevent="onCheckout()">前往結帳<i class="fas fa-long-arrow-alt-right ms-2"></i></span>
                                                </div>
                                            </button>

                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            isShowNameError: false,
            isShowCardNoError: false,

            cardName: '',
            cardNo: '',

            shopCart: [],

            userid: -1,
        }
    },
    watch: {
        cardName(newVal, oldVal) {
            if(newVal.length > 0) this.isShowNameError = false;
        },
        cardNo(newVal, oldVal) {
            if(newVal.length >= 16) this.isShowCardNoError = false;
        },
    },
    methods: {
        onCheckout() {
            if(this.cardName.length == 0) {
                this.isShowNameError = true;
            }

            if(this.cardNo.length < 16) {
                this.isShowCardNoError = true;
            }
        
        },
        onDelete(id, index) {
            axios.delete('/api/v1/shopcart/' + id)
                .then((response) => {
                    if(response.status == 200) {
                        this.shopCart.splice(index, 1);
                    }
                })

        },
        onKeyUp($event, index) {
            console.log('' + index + ' pressed: ' + this.shopCart[index].quantity);
            axios.put('/api/v1/shopcart', {
                id: this.shopCart[index].id,
                prdId: this.shopCart[index].prdId,
                quantity: this.shopCart[index].quantity,
                userId: this.shopCart[index].userId,
            })
            .then((response) => {
                if(response.status == 200 && response.data.code == 0) {
                    console.log('更新成功');
                } else {
                    console.log('更新失敗');
                }
            })
        }
    },
    mounted() {
        // 取得網址列參數
        const queryString = window.location.search;
        // 解析參數列
        const parameters = new URLSearchParams(queryString);
        // 取得使用者名稱
        this.userid = parameters.get('userid');
        console.log(this.userid);
        
        axios.get('/api/v1/shopcart?userId=' + this.userid)
            .then((response) => {
                if(response.status == 200) {
                    console.log(response);

                    // 將api的購物車商品存到變數內
                    if(response.data.code == 0) this.shopCart = response.data.data;
                }
            })
    }
}
</script>

<style scoped>
@media (min-width: 1025px) {
    .h-custom {
        height: 100% !important;
    }
}

.error-text {
    font-size: 16px;
    color: red;
    text-shadow: 2px 2px 2px 2px #000;
}
</style>
