<template>
  <div class="h-screen w-full bg-gradient-to-r from-dark-primary to-primary static">
    <div
      class="absolute bg-white w-10/12 md:w-96 h-fit top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg p-8 shadow flex flex-col justify-center"
    >
      <img src="@/assets/images/firebase-logo.svg" alt="Logo" class="h-24 mb-8" />
      <slot />
    </div>
  </div>
</template>
