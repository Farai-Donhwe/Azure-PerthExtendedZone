<!-- Section divider — Azure hero style, full-page with decorative elements -->
<template>
  <div class="slidev-layout azure-section">
    <div class="section-left">
      <div class="section-label">Microsoft Azure</div>
      <div class="section-text">
        <slot />
      </div>
    </div>
    <div class="section-right">
      <div class="section-deco">
        <div class="deco-blob deco-blob-1"></div>
        <div class="deco-blob deco-blob-2"></div>
        <div class="deco-blob deco-blob-3"></div>
        <div class="deco-blob deco-blob-4"></div>
      </div>
    </div>
  </div>
</template>

<style>
.azure-section {
  display: flex;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  position: relative;
  overflow: hidden;
  background: linear-gradient(160deg, #f7f9fc 0%, #eaf2fb 40%, #dae8f8 100%);
}

.azure-section::before {
  display: none;
}

/* Left content area — roughly 55% */
.section-left {
  flex: 0 0 55%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem 4rem 4rem 5rem;
  z-index: 2;
  position: relative;
}

.section-label {
  font-size: 0.75em;
  font-weight: 600;
  color: #0078d4;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 1.5em;
}

.azure-section h1 {
  color: #002050;
  font-size: 3.2em;
  font-weight: 700;
  line-height: 1.1;
  margin: 0 0 0.3em 0;
}

.azure-section h2 {
  color: #505050;
  font-weight: 400;
  font-size: 1.2em;
  line-height: 1.4;
  margin: 0;
}

.azure-section p {
  color: #6e6e6e;
  font-size: 0.95em;
  margin-top: 0.5em;
}

/* Right decorative area — 45% */
.section-right {
  flex: 0 0 45%;
  position: relative;
  overflow: hidden;
}

.section-deco {
  position: absolute;
  inset: 0;
}

.deco-blob {
  position: absolute;
  border-radius: 50%;
}

.deco-blob-1 {
  width: 420px;
  height: 420px;
  background: linear-gradient(135deg, rgba(0, 183, 195, 0.35), rgba(0, 120, 212, 0.25));
  top: -10%;
  right: -15%;
}

.deco-blob-2 {
  width: 320px;
  height: 320px;
  background: linear-gradient(135deg, rgba(0, 120, 212, 0.2), rgba(0, 90, 158, 0.15));
  top: 45%;
  right: 10%;
}

.deco-blob-3 {
  width: 180px;
  height: 180px;
  background: linear-gradient(135deg, rgba(0, 183, 195, 0.25), rgba(80, 230, 255, 0.15));
  top: 10%;
  right: 45%;
}

.deco-blob-4 {
  width: 120px;
  height: 120px;
  background: linear-gradient(135deg, rgba(0, 183, 195, 0.18), rgba(0, 120, 212, 0.12));
  top: 65%;
  right: 55%;
}

/* Diagonal edge between content and decoration */
.section-left::after {
  content: '';
  position: absolute;
  top: -10%;
  right: -80px;
  width: 200px;
  height: 120%;
  background: linear-gradient(160deg, #f7f9fc 0%, #eaf2fb 40%, #dae8f8 100%);
  transform: skewX(-6deg);
  z-index: 1;
}

/* ============================================================
   Dark mode
   ============================================================ */
html.dark .azure-section {
  background: linear-gradient(160deg, #1a1a2e 0%, #16213e 40%, #0f3460 100%);
}

html.dark .section-label {
  color: #4db8ff;
}

html.dark .azure-section h1 {
  color: #f0f0f0;
}

html.dark .azure-section h2 {
  color: #b0b0b0;
}

html.dark .azure-section p {
  color: #909090;
}

html.dark .section-left::after {
  background: linear-gradient(160deg, #1a1a2e 0%, #16213e 40%, #0f3460 100%);
}

html.dark .deco-blob-1 {
  background: linear-gradient(135deg, rgba(0, 183, 195, 0.3), rgba(77, 184, 255, 0.2));
}

html.dark .deco-blob-2 {
  background: linear-gradient(135deg, rgba(77, 184, 255, 0.18), rgba(0, 90, 158, 0.12));
}

html.dark .deco-blob-3 {
  background: linear-gradient(135deg, rgba(0, 183, 195, 0.22), rgba(80, 230, 255, 0.1));
}

html.dark .deco-blob-4 {
  background: linear-gradient(135deg, rgba(64, 217, 226, 0.15), rgba(77, 184, 255, 0.1));
}
</style>
