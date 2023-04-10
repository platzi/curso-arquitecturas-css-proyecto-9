<script setup>
import { reactive } from 'vue'
import { useRoute } from 'vue-router';
import { useRouter } from 'vue-router';
import ShoppingCart from "./ShoppingCart.vue";
import MessageProduct from "./MessageProduct.vue";

const router = useRouter();
const route = useRoute();
import axios from "axios"

const paymentData = reactive({
        id_product: route.query.id,
        id_parthner:  "637e99734da894a3d9f48dc3",
        name_product: route.query.name,
        quantity:  route.query.c,
        unit_price: route.params.price,
        phone: null,
        address: null,
        state: null
});

const NewOrder = async() =>{

    let data = {
        "id_product": paymentData.id_product,
        "id_parthner": paymentData.id_parthner,
        "name_product": paymentData.name_product,
        "quantity": paymentData.quantity,
        "unit_price": paymentData.unit_price,
        "phone": paymentData.phone,
        "address": paymentData.address,
        "state": "Nueva orden"
        };

    let config ={
        method: 'post',
        url: 'https://magicv1-fastapi.herokuapp.com/order/',
        headers: { 'Content-Type': 'application/json'},
        data : data
        };

    axios(config)

        .then((response) => {
            // Success 🎉
            if(response.status == 201)
                router.push({name:"thx"});
            })

            .catch((error) => {
              // Error 😨
              console.log("Dont work's")
            });
}

</script>
<template>
 <div class="flex flex-col gap-6">
  <div class="sm:mx-auto sm:w-full sm:max-w-md">
    <div class="bg-white py-8 px-6 rounded-lg sm:px-10">
      <form class="mb-0 space-y-6" >
      <p class="text-xl font-medium text-primary">Confirma tu pago 😏</p>
        <div>
          <label for="phone" class="block text-sm font-medium text-primary">Teléfono Celular</label>
          <div class="mt-1">
            <input v-model="paymentData.phone"
            id="phone" name="phone" type="email" autocomplete="phone" required class="" />
          </div>
        </div>
        <div>
          <label for="address" class="block text-sm font-medium text-primary">Dirección de envio (Llega maximo en 3 días)</label>
          <div class="mt-1">
            <input v-model="paymentData.address"
            id="address" name="address" type="text" autocomplete="address" required class="" />
          </div>
        </div>
            <ShoppingCart 
            v-bind:quantity="route.query.c"
            v-bind:price="route.params.price"
            v-bind:name="route.query.name"
            >
            </ShoppingCart>
            <MessageProduct/>
        <div @click="NewOrder" 
        class="bg-green-200 text-green-900 text-center py-2 px-4 rounded-md shadow-sm cursor-pointer">
          <p>Realizar pedido</p>
        </div>
        <div class="flex flex-col justify-start items-center gap-2">
            <label for="terms-and-privacy" class="ml-2 block text-sm text-primary">
              <a href="#" class="text-secundary ">Terminos</a>
              y
              <a href="#" class="text-secundary">politicas de privacidad</a>
          </label>
        </div>
      </form>
    </div>
  </div>
    <div>
    </div>
 </div>
</template>