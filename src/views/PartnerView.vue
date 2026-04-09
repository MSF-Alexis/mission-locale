<script setup lang="ts">
import RetroPartnerCard from "@/components/PartnerCard.vue";
import { dummyData } from "@/composable/partnerStore";
import type { Partner } from "@/entities/partner";


const partners: Partner[] = dummyData
</script>

<template>
  <section class="partners-view">
    <header class="flex flex-col gap-3 mb-8 pt-10">
      <h1 class="w-fit">Les partenaires présents</h1>

      <p class="retro bg-yellow-100 px-2 py-2 w-fit margin-y-md">
        Découvre les organismes de formation et recruteurs présents au forum 👇
      </p>
    </header>

    <section class="partners-grid">
      <RetroPartnerCard
        v-for="partner in partners"
        :key="partner.id"
        :partner="partner"
      />
    </section>
  </section>
</template>

<style scoped>
.partners-view {
  padding-bottom: 40px;
}

.partners-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 8px;
}

.margin-y-md {
  margin: 15px 0;
}

.retro {
  border: 2px solid #222;
  box-shadow: 6px 6px 0 #222;
}

.partners-grid > *:hover {
  transform: translate(-2px, -2px);
  transition: 0.1s;
}
</style>