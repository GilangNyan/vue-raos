<template>
    <div class="flex flex-col items-center space-y-4">
        <h2 class="text-xl font-semibold">{{ $t('resetPassword') }}</h2>
        <Form class="flex flex-col w-full space-y-2" id="reset" @submit="onSubmit" :validation-schema="schema">
            <InputRoundedWithIcon
                name="password"
                :label="$t('label.password')"
                type="password"
                v-model="password"
            >
                <LockClosedIcon class="w-5 h-5 text-slate-400" />
            </InputRoundedWithIcon>
            <InputRoundedWithIcon
                name="confirmPassword"
                :label="$t('label.confirmPassword')"
                type="password"
                v-model="confirmPassword"
            >
                <LockClosedIcon class="w-5 h-5 text-slate-400" />
            </InputRoundedWithIcon>
        </Form>
        <ButtonRoundedFullWidth :label="$t('resetPassword')" form="register" />
    </div>
</template>

<script setup lang="ts">
import { LockClosedIcon } from '@heroicons/vue/24/outline'
import InputRoundedWithIcon from '@/components/input/InputRoundedWithIcon.vue'
import ButtonRoundedFullWidth from '@/components/input/ButtonRoundedFullWidth.vue'
import { Form } from 'vee-validate'
import * as yup from 'yup'

let password: string = ''
let confirmPassword: string = ''

// Validation Schema
const schema = yup.object({
  password: yup.string().required().min(8),
  confirmPassword: yup.string().required().oneOf([yup.ref('password')])
})

const onSubmit = (val: any) => {
  console.log(JSON.stringify(val, null, 2))
}
</script>