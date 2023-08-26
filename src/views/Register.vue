<template>
  <div class="lg:m-10">
<form class="relative border border-gray-100 space-y-3 max-w-screen-md mx-auto rounded-md bg-white p-6 shadow-xl lg:p-10"  @submit.prevent="performsignup">
<center><h1 class="mb-6 text-xl font-semibold lg:text-2xl">ʀᴇɢɪsᴛᴇʀ</h1></center>


<div>
  <label class=""> 𝑼𝒔𝒆𝒓𝒏𝒂𝒎𝒆 </label>
  <input v-model="name" type="text" placeholder="Username" class="mt-2 h-12 w-full rounded-md bg-gray-100 px-3" />
</div>
<div>
  <label class=""> 𝑬𝒎𝒂𝒊𝒍 </label>
  <input v-model="email" type="email" placeholder="Email Address" class="mt-2 h-12 w-full rounded-md bg-gray-100 px-3" />
</div>
<div>
  <label class=""> 𝑷𝒉𝒐𝒏𝒆  </label>
  <input v-model="phone" type="number" placeholder="phone " class="mt-2 h-12 w-full rounded-md bg-gray-100 px-3" />
</div>
<div>
  <label class=""> 𝑷𝒂𝒔𝒔𝒘𝒐𝒓𝒅 </label>
  <input v-model="password" type="password" placeholder="* * * * * *" class="mt-2 h-12 w-full rounded-md bg-gray-100 px-3" />
</div>
<div>
  <label class=""> 𝑪𝒐𝒎𝒇𝒊𝒓𝒎_𝑷𝒂𝒔𝒔𝒘𝒐𝒓𝒅 </label>
  <input v-model="confrim_password" type="password" placeholder="* * * * * *" class="mt-2 h-12 w-full rounded-md bg-gray-100 px-3" />
</div>


<div>
  <button type="submit" class="mt-5 w-full rounded-md bg-blue-600 p-2 text-center font-semibold text-white">Register</button>
</div>
</form>

</div>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  data() {
      return {
          name: '',
          email: '',
          phone: '',
          password: '',
          confrim_password: '',
      };
  },
  methods: {
      ...mapActions('auth', ['signup']),
      async performsignup() {
          const credentials = {
              name: this.name,
              email: this.email,
              phone: this.phone,
              password: this.password,
              confrim_password: this.confrim_password,
              
          };

          const success = await this.signup(credentials);

          if (success) {
              // Redirect to the desired route on successful login
              this.$router.push('/login');
          } else {
              alert("signup Failed");
          }
      },
  },
};
</script>