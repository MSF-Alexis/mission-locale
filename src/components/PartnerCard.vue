<template>
  <div class="card">
    <div class="card-image">
      <img
        v-if="partner.imgUrl"
        :src="partner.imgUrl"
        :alt="partner.name"
      />
      <div v-else class="image-placeholder"></div>
    </div>

    <div class="card-content">
      <h3 class="title">{{ partner.name }}</h3>

      <span class="badge" :class="partner.type">
        {{ partner.type }}
      </span>

      <p class="description">
        {{ partner.description }}
      </p>

      <a
        :href="partner.url"
        target="_blank"
        class="retro-button"
      >
        Voir plus
      </a>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { Partner } from '@/entities/partner';


defineProps<{
  partner: Partner;
}>();
</script>

<style scoped>

.card {
  position: relative;
  background: #f2e6c9;
  border: 2px solid #222;
  width: 260px;
  padding: 12px;
  box-shadow: 6px 6px 0 #222;
  font-family: "Arial", sans-serif;
}


.card::after {
  content: "";
  position: absolute;
  top: 6px;
  left: 6px;
  width: 100%;
  height: 100%;
  background: #cdbb9a;
  z-index: -1;
}


.card-image img {
  width: 100%;
  border: 2px solid #222;
  margin-bottom: 10px;
}


.title {
  font-size: 16px;
  margin: 0 0 6px;
}

.description {
  font-size: 13px;
  margin: 10px 0;
}


.badge {
  display: inline-block;
  font-size: 11px;
  padding: 3px 8px;
  border: 2px solid #222;
  margin-bottom: 8px;
}

.badge.job {
  background: #d96c6c;
  color: white;
}

.badge.formation {
  background: #6c8fd9;
  color: white;
}


.retro-button {
  display: inline-block;
  text-decoration: none;
  background: #e8d8b5;
  border: 2px solid #222;
  padding: 6px 12px;
  font-size: 12px;
  color: black;
  box-shadow: 4px 4px 0 #222;
  transition: all 0.1s ease;
}


.retro-button:active {
  box-shadow: 1px 1px 0 #222;
  transform: translate(3px, 3px);
}

.card-image {
  width: 100%;
  height: 140px;
  margin-bottom: 10px;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: 2px solid #222;
}

.image-placeholder {
  width: 100%;
  height: 100%;
  border: 2px dashed #222;
  background: repeating-linear-gradient(
    45deg,
    #e8d8b5,
    #e8d8b5 10px,
    #d9c7a3 10px,
    #d9c7a3 20px
  );
}
</style>