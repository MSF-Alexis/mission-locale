<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header class="flex gap-15 border-black border-solid outline border-b-2 border--shadow">
    <div class="border-black border-solid border-r-2 px-6 py-8">
      <img alt="Vue logo" class="h-full" src="@/assets/ml_logo.png" width="150" height="150" />
      
    </div>

    <nav class="flex gap-10 items-center">
      <RouterLink class="nav--link" to="/">Accueil</RouterLink>
      <RouterLink class="nav--link" to="/partenaires">Partenaires</RouterLink>
    </nav>
  </header>
  <main class="px-64 bg-main">
    <RouterView />
  </main>
</template>

<style scoped>
.nav--link {
  font-size: var(--headline-large-font-size);
  line-height: var(--headline-large-line-height);
  font-weight: 600;
}

.border--shadow {
  box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
}
</style>