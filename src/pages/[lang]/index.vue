<script setup lang="ts">

</script>

<template>
  <h1 class="text-primary-500">
    Here is home page
  </h1>
  <router-link :to="`/${$route.params.lang}/about-us`">
    Go to about us page
  </router-link>
</template>
