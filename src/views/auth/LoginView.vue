<template>
  <div class="flex flex-col items-center space-y-4">
    <h2 class="text-xl font-semibold">{{ $t('login') }}</h2>
    <Form
      class="flex flex-col w-full space-y-2"
      id="login"
      @submit="onSubmit"
      :validation-schema="schema"
    >
      <InputRoundedWithIcon
        name="username"
        :label="$t('label.username')"
        type="text"
        v-model="username"
      >
        <UserIcon class="h-6 w-6 text-slate-400" />
      </InputRoundedWithIcon>
      <InputRoundedWithIcon
        name="password"
        :label="$t('label.password')"
        type="password"
        v-model="password"
      >
        <LockClosedIcon class="h-6 w-6 text-slate-400" />
      </InputRoundedWithIcon>
      <div class="flex justify-between items-center">
        <div class="flex space-x-2 items-center group">
          <input
            type="checkbox"
            name="remember"
            id="remember"
            class="text-primary border-slate-400 focus:ring-primary-variant rounded group-hover:cursor-pointer group-hover:bg-primary/20"
          />
          <label
            for="remember"
            class="text-sm text-slate-400 font-semibold group-hover:cursor-pointer group-hover:text-slate-500"
            >{{ $t('label.remember') }}</label
          >
        </div>
        <router-link to="/forgot-password" class="text-href">{{
          $t('label.forgotPassword')
        }}</router-link>
      </div>
    </Form>
    <ButtonRoundedFullWidth :label="$t('login')" form="login" />
    <router-link to="/register" class="text-href flex items-center">
      <p>{{ $t('label.noAccountRegister') }}</p>
      <ChevronRightIcon class="w-6 h-6" />
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { ChevronRightIcon } from '@heroicons/vue/20/solid'
import { LockClosedIcon, UserIcon } from '@heroicons/vue/24/outline'
import InputRoundedWithIcon from '@/components/input/InputRoundedWithIcon.vue'
import ButtonRoundedFullWidth from '@/components/input/ButtonRoundedFullWidth.vue'
import { Form } from 'vee-validate'
import * as yup from 'yup'

let username: string = ''
let password: string = ''

// Validation Schema
const schema = yup.object({
  username: yup.string().required(),
  password: yup.string().required().min(8)
})

const onSubmit = (val: any) => {
  console.log(JSON.stringify(val, null, 2))
}
</script>
