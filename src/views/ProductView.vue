<script setup>
import axios from "axios"
import { ref, watchEffect } from "vue";
import { useRoute } from 'vue-router';
import { useRouter } from 'vue-router'
import ProductDetail from "../components/product/ProductDetail.vue"
import ProductBuy from "../components/product/ProductBuy.vue"
import ProductInfo from "../components/product/ProductInfo.vue"


const route = useRoute();
const router = useRouter();
const product = ref([])
const open  = ref(false);

const loadProduct = async() => {

    let config ={
      method: 'get',
      url: `https://back-waro-colombia.onrender.com/user/getgarageitem/${route.params.pId}`,
      headers: { 'Content-Type' :'application/json' }
      };

    axios(config)

      .then((response) => {
        // Success 🎉
        product.value = response.data;
        open.value = true;
        })

        .catch((error) => {
          open.value = false;
          // router.go(-1)
        });
}

watchEffect(()=>{
  if(route.path.split('/').slice(1)[0] == "g")
      loadProduct();
});

</script>

<template>
    
    <div class="flex flex-col gap-2" v-if="open">
        <div class="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-4 p-4 md:gap-20">
            <div class="md:col-span-6 lg:col-span-7 flex flex-col gap-4 md:gap-6">
                    <ProductDetail
                    v-bind:name_ad="product.name_ad"
                    v-bind:category="product.category"
                    v-bind:city_ad="product.city_ad"
                    v-bind:saving="product.saving"
                    >
                    </ProductDetail>

                    <ProductBuy 
                    v-bind:full_price="product.full_price"
                    v-bind:name_ad="product.name_ad"
                    >
                    </ProductBuy>

                    <ProductInfo 
                    v-bind:description="product.description"
                    >
                    </ProductInfo>
    
            </div>

            <div class="md:col-span-6 lg:col-span-5">
                <img class="md:rounded-xl rounded-xl object-cover w-full"
                v-bind="{'src':`https://warocolombia.infura-ipfs.io/ipfs/${product.imgHash}`, 'alt':product.imgHash}">
            </div>
        </div>
    </div>

</template>
