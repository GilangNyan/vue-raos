<template>
  <div class="flex flex-col items-center space-y-8">
    <h2 class="text-xl font-semibold">{{ $t('login') }}</h2>
    <form action="#" method="post" class="flex flex-col w-full space-y-4" name="login" @submit="login">
      <InputRoundedWithIcon name="username" :label="$t('label.username')" type="text" v-model="username">
        <UserIcon class="h-6 w-6 text-slate-400" />
      </InputRoundedWithIcon>
      <InputRoundedWithIcon name="password" :label="$t('label.password')" type="password" v-model="password">
        <LockClosedIcon class="h-6 w-6 text-slate-400" />
      </InputRoundedWithIcon>
      <div class="flex justify-between items-center">
        <div class="flex space-x-2 items-center group">
          <input type="checkbox" name="remember" id="remember" class="text-primary border-slate-400 focus:ring-primary-variant rounded group-hover:cursor-pointer group-hover:bg-primary/20">
          <label for="remember" class="text-sm text-slate-400 font-semibold group-hover:cursor-pointer group-hover:text-slate-500">{{ $t('label.remember') }}</label>
        </div>
        <router-link to="/forgot-password" class="text-href">{{ $t('label.forgotPassword') }}</router-link>
      </div>
    </form>
    <ButtonRoundedFullWidth :label="$t('login')" form="login" />
  </div>
</template>

<script setup lang="ts">
import { LockClosedIcon, UserIcon } from '@heroicons/vue/24/outline';
import InputRoundedWithIcon from '@/components/input/InputRoundedWithIcon.vue';
import ButtonRoundedFullWidth from '@/components/input/ButtonRoundedFullWidth.vue';

let username: string = ''
let password: string = ''

const login = () => {
  // 
}
</script>