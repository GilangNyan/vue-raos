<script setup lang="ts">
import { RouterView } from 'vue-router'
import layouts from './layouts'
import { shallowRef } from 'vue'
import router from './router'

const layout: any = shallowRef('div')

router.afterEach((to) => {
  if (to.meta.layout === 'AppLayout') {
    layout.value = layouts.AppLayout
  } else if (to.meta.layout === 'AuthLayout') {
    layout.value = layouts.AuthLayout
  } else if (to.meta.layout === 'BlankLayout') {
    layout.value = layouts.BlankLayout
  } else {
    layout.value = 'div'
  }
})
</script>

<template>
  <component :is="layout">
    <RouterView />
  </component>
</template>
