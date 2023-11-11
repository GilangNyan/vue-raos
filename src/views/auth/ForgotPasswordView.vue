<template>
  <div class="flex flex-col items-center space-y-4">
    <h2 class="text-xl font-semibold">{{ $t('forgotPassword') }}</h2>
    <p class="text-center text-sm text-slate-400 font-semibold">
      {{ $t('description.forgotPassword') }}
    </p>
    <Form class="flex flex-col w-full space-y-2" id="forgot" @submit="onSubmit" :validation-schema="schema">
      <InputRoundedWithIcon name="email" :label="$t('label.email')" type="email" v-model="email">
        <EnvelopeIcon class="h-6 w-6 text-slate-400" />
      </InputRoundedWithIcon>
    </Form>
    <ButtonRoundedFullWidth :label="$t('label.submit')" form="forgot" />
    <router-link to="/login" class="text-href flex items-center">
      <ChevronLeftIcon class="w-6 h-6" />
      <p>{{ $t('label.backToLogin') }}</p>
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { ChevronLeftIcon } from '@heroicons/vue/20/solid'
import { EnvelopeIcon } from '@heroicons/vue/24/outline'
import ButtonRoundedFullWidth from '@/components/input/ButtonRoundedFullWidth.vue'
import InputRoundedWithIcon from '@/components/input/InputRoundedWithIcon.vue'
import { Form } from 'vee-validate'
import * as yup from 'yup'
import router from '@/router'

// Validation Schema
const schema = yup.object({
  email: yup.string().required().email(),
})

let email: string = ''

const onSubmit = (val: any) => {
  console.log(JSON.stringify(val, null, 2))
  router.push('/password-reset-request-sent')
}
</script>
