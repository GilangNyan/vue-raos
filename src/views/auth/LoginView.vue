<template>
  <div class="flex flex-col items-center space-y-8">
    <h2 class="text-xl font-semibold">{{ $t('login') }}</h2>
    <form action="#" method="post" class="flex flex-col w-full space-y-4">
      <InputRoundedWithIcon name="username" :label="$t('label.username')" type="text" v-model="username">
        <UserIcon class="h-6 w-6 text-slate-300" />
      </InputRoundedWithIcon>
      <InputRoundedWithIcon name="password" :label="$t('label.password')" type="password" v-model="password">
        <LockClosedIcon class="h-6 w-6 text-slate-300" />
      </InputRoundedWithIcon>
    </form>
  </div>
</template>

<script setup lang="ts">
import { UserIcon } from '@heroicons/vue/24/outline';
import InputRoundedWithIcon from '@/components/input/InputRoundedWithIcon.vue';
import { LockClosedIcon } from '@heroicons/vue/24/outline';

let username: string = ''
let password: string = ''
</script>