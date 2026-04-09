<script setup lang="ts">
  import { RouterLink } from "vue-router";
</script>

<template>
  <section class="flex flex-col gap-3 mb-8 pt-10">
    <h1 class="w-fit">Forum Ensemble vers la réussite</h1>
    <article class="flex gap-4 bg-yellow-100 w-fit px-2 py-2 retro">
      <p>Le <time datetime="2026-09-04"><strong>9 avril 2026</strong></time></p>
      <p>Commence à <time datetime="09:00"><strong>9h00</strong></time></p>
      <p>Termine à <time datetime="13:00"><strong>13h00</strong></time></p>

    </article>
    <address> Mission Locale de Rouen - 33 avenue Champlain, 76100 Rouen</address>
    <iframe class="w-full aspect-16/6 my-4"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2594.674498255956!2d1.0899450768717165!3d49.433967560028975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e0de7a617fb42d%3A0xa85bd37bdbbd3266!2s33%20Av.%20Champlain%2C%2076100%20Rouen!5e0!3m2!1sfr!2sfr!4v1775725630583!5m2!1sfr!2sfr"
      style="border:0;" allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </section>

  <section>
    <h2 class="subtitle w-fit px-2 py-1 bg-sky-100 margin-y-md">Au programme :</h2>
    <article class="margin-y-md">
      <p>La Mission Locale de Rouen organise un forum dédié à l’alternance et à la formation pour
        accompagner les jeunes
        vers
        l’emploi et la qualification.

      </p>
      <p class="margin-y-md"> Cet événement sera l’occasion de rencontrer de nombreux acteurs de la formation et de l’emploi afin de
        découvrir
        des
        opportunités concrètes pour construire son avenir professionnel.
      </p>
      <RouterLink class="retro bg-yellow-100 margin-y-lg " to="/partenaires">Voir les partenaires présent</RouterLink>
    </article>
    <ul class="margin-y-md margin-">
      <li> 💼 Informations sur les contrats en alternance</li>
      <li>
        🎓 Présentation d’offres de formation
      </li>
      <li>
        🏠 Conseils et informations pratiques (logement, mobilité, etc.)
      </li>
      <li>
        🤝 Rencontres avec des organismes de formation et partenaires

      </li>
      <li>
        📄 Pensez à venir avec votre CV !
      </li>
    </ul>
    <article class="margin-t-lg">
      <h3 class="subtitle w-fit px-2 py-1 bg-sky-100 margin-y-md margin-t-lg">⚠️ Inscription gratuite mais obligatoire
      </h3>
      <a class="retro margin-y-md bg-yellow-100 margin-t-lg" href="tel:+33232816376">📞 02 32 81 63 76</a>

    </article>
  </section>
</template>

<style scoped>
.subtitle {
  border: 2px solid #222;
  box-shadow: 6px 6px 0 #222;
}

strong {
  font-weight: 900;
}

.margin-y-md {
  margin: 15px 0;
}

.margin-y-lg {
  margin: 35px 0;
}

.margin-t-lg {
  margin: 0 0 35px 0;
}

address {
  font-size: var(--headline-small-font-size);
  line-height: var(--headline-small-line-height);
}
</style>