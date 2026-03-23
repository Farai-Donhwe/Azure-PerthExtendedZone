<!-- Feature cards layout — Azure card grid pattern -->
<template>
  <div class="slidev-layout azure-cards">
    <div class="cards-header">
      <slot name="default" />
    </div>
    <div class="cards-grid">
      <slot name="cards" />
    </div>
  </div>
</template>

<style>
.azure-cards {
  padding: 2.5rem 3rem;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.2em;
  margin-top: 1em;
}
</style>
