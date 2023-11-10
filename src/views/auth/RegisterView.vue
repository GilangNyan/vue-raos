<template>
  <div class="flex flex-col items-center space-y-4">
    <h2 class="text-xl font-semibold">{{ $t('register') }}</h2>
    <form action="#" method="post" class="flex flex-col w-full space-y-2" name="register">
      <InputRoundedWithIcon name="username" :label="$t('label.username')" type="text" v-model="username">
        <UserIcon class="w-5 h-5 text-slate-400" />
      </InputRoundedWithIcon>
      <InputRoundedWithIcon name="email" :label="$t('label.email')" type="email" v-model="email">
        <EnvelopeIcon class="w-5 h-5 text-slate-400" />
      </InputRoundedWithIcon>
      <InputRoundedWithIcon name="password" :label="$t('label.password')" type="password" v-model="password">
        <LockClosedIcon class="w-5 h-5 text-slate-400" />
      </InputRoundedWithIcon>
      <InputRoundedWithIcon name="confirmPassword" :label="$t('label.confirmPassword')" type="password" v-model="confirmPassword">
        <LockClosedIcon class="w-5 h-5 text-slate-400" />
      </InputRoundedWithIcon>
    </form>
    <ButtonRoundedFullWidth :label="$t('register')" form="register" />
    <router-link to="/login" class="text-href flex items-center">
      <ChevronLeftIcon class="w-6 h-6" />
      <p>{{ $t('label.backToLogin') }}</p>
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { ChevronLeftIcon } from '@heroicons/vue/20/solid';
import { EnvelopeIcon, LockClosedIcon, UserIcon } from '@heroicons/vue/24/outline';
import ButtonRoundedFullWidth from '@/components/input/ButtonRoundedFullWidth.vue';
import InputRoundedWithIcon from '@/components/input/InputRoundedWithIcon.vue';

let username: string = ''
let email: string = ''
let password: string = ''
let confirmPassword: string = ''
</script>