
  <template>
      <body class="bg-gray-100">
    <div class="container mx-auto mt-10" >
      <div class="flex shadow-md my-10">
        <div class="w-3/4 bg-white px-10 py-10">
          <div class="flex justify-between border-b pb-8">
            <h1 class="font-semibold text-2xl">Your Cart</h1>
          </div>
          <div class="flex mt-10 mb-5" >
            <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
            <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Quantity</h3>
            <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>
            <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
          </div>
          <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5"  v-for="cart in getCart" :key="cart.cart_id">
            <div class="flex w-2/5" > <!-- product -->
              <div class="w-20">
                <img class="h-24" src="../assets/img/t6.jpg" alt="">
              </div>
              <div class="flex flex-col justify-between ml-4 flex-grow" >
                <span class="font-bold text-sm">{{ cart.name }}</span>
                <span class="text-purple-500 text-xs">T-Shirt</span>
                <a type="button" href="#4"  @click="removeItem(cart.cart_id)" class="font-semibold hover:text-purple-500 tex-t-gray-500 text-xs">Remove</a>
              </div>
            </div>
            <div class="flex justify-center items-center w-1/5">
              <span @click="changeQty({cartId: cart.cart_id, typeQty: 'minus'} )"
                                    class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-black hover:text-yellow-50">
                                    - </span>
                                <span class="mr-3 ml-3" >
                                    {{ cart.qty }}
                                </span>
                                <span @click="changeQty({cartId: cart.cart_id, typeQty: 'plus'})"
                                    class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-black hover:text-yellow-50">
                                    + </span>
            </div>
            <span class="text-center w-1/5 font-semibold text-sm">Rp.{{ cart.regular_price }}</span>
            <span class="text-center w-1/5 font-semibold text-sm">Rp.{{ totalHarga()  }}</span>
          </div>
          
  
  
          <a href="/product" class="flex font-semibold text-purple-600 text-sm mt-10">
        
            <svg class="fill-current mr-2 text-purple-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"/></svg>
           Look back at the product
          </a>
        </div>
  
        <div id="summary" class="w-1/4 px-8 py-10">
          <h1 class="font-semibold text-2xl border-b pb-8">Order Summary</h1>
          <div class="flex justify-between mt-10 mb-5">
            <span class="font-semibold text-sm uppercase">Items 3</span>
            <span class="font-semibold text-sm">590$</span>
          </div>
          <div>
            <label class="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
            <select class="block p-2 text-gray-600 w-full text-sm">
              <option>Standard shipping - $15.000</option>
            </select>
          </div>
          <div class="py-10">
            <label for="promo" class="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
            <input type="text" id="promo" placeholder="Enter your code" class="p-2 text-sm w-full">
          </div>
          <button class="bg-purple-500 hover:bg-purple-600 px-5 py-2 text-sm text-white uppercase">Apply</button>
          <div class="border-t mt-8">
            <div class="flex font-semibold justify-between py-6 text-sm uppercase">
              <span>Total</span>
              <span>Rp.{{ totalHarga() }}</span>
            </div>
            <a href="/checkout">
            <button  class="bg-purple-500 font-semibold hover:bg-purple-600 py-3 text-sm text-white uppercase w-full">Checkout</button>
         </a>
        </div>
        <div>         

        </div>
        </div>
      </div>
    </div>
  </body>
  </template>
 <script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {
      cek : 1
    }
  },
    computed: {
        ...mapGetters('cart', ['getCart']),
    },
    methods: {
        ...mapActions('cart', ['fetchCart']),
        ...mapActions('product', ['fetchProduct']),
        totalHarga() {
          this.total = this.getCart.reduce((acc, product) => {
            return acc + parseFloat(product.regular_price * product.qty);
          }, 0);
          return this.total.toFixed(2);
        },
        removeItem(cartId) {
      this.$store.dispatch('cart/removeFromCart', cartId);
    },
    changeQty(cartId, typeQty) {
      this.$store.dispatch('cart/changeQuantity', cartId, typeQty);
    },
        tambah() {
            this.cek++
        },
        kurang() {
            if (this.cek > 1) {
                this.cek--
            }

        }
    },
    beforeMount() {
      this.fetchProduct();
    },
    mounted() {
        this.fetchCart();
    },

    //remove product from cart
   
}
</script>

    <style>
      #summary {
        background-color: #f6f6f6;
      }
    </style>
  