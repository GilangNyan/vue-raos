<template>
    <div class="flex flex-col items-center space-y-4">
        <h2 class="text-xl font-semibold">{{ $t('requestSent') }}</h2>
        <p class="text-center text-sm text-slate-400 font-semibold">
            {{ $t('description.passwordResetRequestSent') }}
        </p>
        <router-link to="/login" class="text-href flex items-center">
            <ChevronLeftIcon class="w-6 h-6" />
            <p>{{ $t('label.backToLogin') }}</p>
        </router-link>
    </div>
</template>

<script setup lang="ts">
import { ChevronLeftIcon } from '@heroicons/vue/20/solid'
</script>