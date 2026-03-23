<!-- Section divider — centered text with Azure gradient accent -->
<template>
  <div class="slidev-layout azure-section">
    <div class="section-content">
      <slot />
    </div>
    <div class="section-accent"></div>
  </div>
</template>

<style>
.azure-section {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: linear-gradient(135deg, #002050 0%, #0078d4 100%);
  padding: 3rem;
  position: relative;
  overflow: hidden;
}

.azure-section::before {
  background: rgba(255,255,255,0.15);
}

.section-content {
  z-index: 2;
}

.azure-section h1 {
  color: white;
  font-size: 2.8em;
  font-weight: 700;
}

.azure-section h2 {
  color: rgba(255,255,255,0.85);
  font-weight: 400;
  font-size: 1.3em;
}

.azure-section p {
  color: rgba(255,255,255,0.7);
}

.section-accent {
  position: absolute;
  bottom: -60px;
  left: -60px;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: rgba(0, 183, 195, 0.2);
}
</style>
