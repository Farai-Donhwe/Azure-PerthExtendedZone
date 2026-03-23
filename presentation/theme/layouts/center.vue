<!-- Center layout with Azure styling -->
<template>
  <div class="slidev-layout azure-center">
    <div class="center-content">
      <slot />
    </div>
  </div>
</template>

<style>
.azure-center {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 3rem;
}

.center-content {
  max-width: 80%;
}
</style>
