<template>
    <button class="button-full-rounded-primary" :form="form">
      <p class="text-white font-semibold">{{ label }}</p>
    </button>
</template>

<script setup lang="ts">
interface Props {
    label: string
    form?: string
}

defineProps<Props>()
</script>