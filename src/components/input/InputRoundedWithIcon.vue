<template>
    <label for="username" class="relative block w-full">
        <span class="sr-only">{{ label }}</span>
        <span class="absolute inset-y-0 left-0 flex items-center pl-3">
          <slot />
        </span>
        <input :type="type" :name="name" :id="name" class="rounded-full w-full border pl-10 pr-4 py-2 border-slate-300 placeholder-slate-300 focus:outline-none focus:border-info focus:ring-info focus:ring-1" :placeholder="label" :value="modelValue" @input="onInput">
      </label>
</template>

<script setup lang="ts">
interface Props {
    name: string
    label: string
    type: string
    modelValue: string
}

defineProps<Props>()
const emits = defineEmits(['update:modelValue'])

const onInput = (event: Event) => {
  emits('update:modelValue', (event.target as HTMLInputElement).value)
}
</script>