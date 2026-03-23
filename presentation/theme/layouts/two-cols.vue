<!-- Two-column layout — Azure style with clean separation -->
<template>
  <div class="slidev-layout azure-two-cols">
    <div class="col-left">
      <slot name="default" />
    </div>
    <div class="col-right">
      <slot name="right" />
    </div>
  </div>
</template>

<style>
.azure-two-cols {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
  padding: 2.5rem 3rem;
  align-items: start;
}

.col-left,
.col-right {
  overflow: hidden;
}
</style>
