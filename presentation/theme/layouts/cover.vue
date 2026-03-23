<!-- Cover / Title slide — Azure hero style, full-page with decorative elements -->
<template>
  <div class="slidev-layout azure-cover">
    <div class="cover-left">
      <div class="ms-logo">
        <svg width="21" height="21" viewBox="0 0 21 21" fill="none">
          <rect width="10" height="10" fill="#f25022"/>
          <rect x="11" width="10" height="10" fill="#7fba00"/>
          <rect y="11" width="10" height="10" fill="#00a4ef"/>
          <rect x="11" y="11" width="10" height="10" fill="#ffb900"/>
        </svg>
        <span>Microsoft Azure</span>
      </div>
      <div class="cover-text">
        <slot />
      </div>
    </div>
    <div class="cover-right">
      <div class="cover-deco">
        <div class="deco-circle deco-1"></div>
        <div class="deco-circle deco-2"></div>
        <div class="deco-circle deco-3"></div>
        <div class="deco-circle deco-4"></div>
      </div>
    </div>
  </div>
</template>

<style>
.azure-cover {
  display: flex;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
  position: relative;
  background: linear-gradient(160deg, #f7f9fc 0%, #eaf2fb 40%, #dae8f8 100%);
}

.azure-cover::before {
  display: none;
}

/* Left content area */
.cover-left {
  flex: 0 0 55%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem 3rem 4rem 5rem;
  z-index: 2;
  position: relative;
}

/* Diagonal edge */
.cover-left::after {
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

.cover-text {
  position: relative;
  z-index: 2;
}

.ms-logo {
  display: flex;
  align-items: center;
  gap: 0.6em;
  font-size: 0.85em;
  color: #3b3b3b;
  font-weight: 500;
  margin-bottom: 2.5em;
}

.azure-cover h1 {
  font-size: 3.2em;
  color: #0078d4;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 0.15em;
}

.azure-cover h2 {
  font-size: 1.3em;
  color: #3b3b3b;
  font-weight: 400;
  margin-bottom: 0.8em;
}

.azure-cover p {
  color: #6e6e6e;
  font-size: 1em;
}

/* Right decorative area */
.cover-right {
  flex: 0 0 45%;
  position: relative;
  overflow: hidden;
}

.cover-deco {
  position: absolute;
  inset: 0;
}

.deco-circle {
  position: absolute;
  border-radius: 50%;
}

.deco-1 {
  width: 450px;
  height: 450px;
  background: linear-gradient(135deg, rgba(0, 183, 195, 0.35), rgba(0, 120, 212, 0.25));
  top: -5%;
  right: -10%;
}

.deco-2 {
  width: 300px;
  height: 300px;
  background: linear-gradient(135deg, rgba(0, 120, 212, 0.2), rgba(0, 90, 158, 0.15));
  top: 50%;
  right: 15%;
}

.deco-3 {
  width: 180px;
  height: 180px;
  background: linear-gradient(135deg, rgba(0, 183, 195, 0.25), rgba(80, 230, 255, 0.15));
  top: 8%;
  right: 50%;
}

.deco-4 {
  width: 100px;
  height: 100px;
  background: linear-gradient(135deg, rgba(0, 183, 195, 0.18), rgba(0, 120, 212, 0.12));
  top: 70%;
  right: 60%;
}

/* ============================================================
   Dark mode
   ============================================================ */
html.dark .azure-cover {
  background: linear-gradient(160deg, #1a1a2e 0%, #16213e 40%, #0f3460 100%);
}

html.dark .cover-left::after {
  background: linear-gradient(160deg, #1a1a2e 0%, #16213e 40%, #0f3460 100%);
}

html.dark .ms-logo span {
  color: #d0d0d0;
}

html.dark .azure-cover h1 {
  color: #4db8ff;
}

html.dark .azure-cover h2 {
  color: #b0b0b0;
}

html.dark .azure-cover p {
  color: #909090;
}

html.dark .deco-1 {
  background: linear-gradient(135deg, rgba(0, 183, 195, 0.3), rgba(77, 184, 255, 0.2));
}

html.dark .deco-2 {
  background: linear-gradient(135deg, rgba(77, 184, 255, 0.18), rgba(0, 90, 158, 0.12));
}

html.dark .deco-3 {
  background: linear-gradient(135deg, rgba(0, 183, 195, 0.22), rgba(80, 230, 255, 0.1));
}

html.dark .deco-4 {
  background: linear-gradient(135deg, rgba(64, 217, 226, 0.15), rgba(77, 184, 255, 0.1));
}
</style>
