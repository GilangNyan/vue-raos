<template>
  <div class="flex flex-col items-center space-y-4">
    <h2 class="text-xl font-semibold">{{ $t('forgotPassword') }}</h2>
    <p class="text-center text-sm text-slate-400 font-semibold">
      {{ $t('description.forgotPassword') }}
    </p>
    <form action="#" method="post" class="flex flex-col w-full space-y-2" name="forgot">
      <InputRoundedWithIcon name="email" :label="$t('label.email')" type="email" v-model="email">
        <EnvelopeIcon class="h-6 w-6 text-slate-400" />
      </InputRoundedWithIcon>
    </form>
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

let email: string = ''
</script>
