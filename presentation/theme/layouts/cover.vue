<!-- Cover / Title slide — Azure hero style with gradient overlay -->
<template>
  <div class="slidev-layout azure-cover">
    <div class="cover-content">
      <div class="ms-logo">
        <svg width="21" height="21" viewBox="0 0 21 21" fill="none">
          <rect width="10" height="10" fill="#f25022"/>
          <rect x="11" width="10" height="10" fill="#7fba00"/>
          <rect y="11" width="10" height="10" fill="#00a4ef"/>
          <rect x="11" y="11" width="10" height="10" fill="#ffb900"/>
        </svg>
        <span>Microsoft Azure</span>
      </div>
      <slot />
    </div>
    <div class="cover-decoration">
      <div class="deco-circle deco-1"></div>
      <div class="deco-circle deco-2"></div>
      <div class="deco-circle deco-3"></div>
    </div>
  </div>
</template>

<style>
.azure-cover {
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #ffffff 0%, #f0f6fc 50%, #deecf9 100%);
  padding: 0;
  overflow: hidden;
  position: relative;
}

html.dark .azure-cover {
  background: linear-gradient(135deg, #1e1e1e 0%, #1a2a3a 50%, #1a3a5c 100%);
}

html.dark .ms-logo span {
  color: #d0d0d0;
}

.azure-cover::before {
  height: 0;
}

.cover-content {
  flex: 1;
  padding: 3rem 4rem;
  z-index: 2;
}

.ms-logo {
  display: flex;
  align-items: center;
  gap: 0.6em;
  font-size: 0.85em;
  color: #3b3b3b;
  font-weight: 500;
  margin-bottom: 2em;
}

.azure-cover h1 {
  font-size: 3em;
  color: #0078d4;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 0.2em;
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

.cover-decoration {
  position: absolute;
  right: -5%;
  top: -10%;
  width: 55%;
  height: 120%;
  z-index: 1;
}

.deco-circle {
  position: absolute;
  border-radius: 50%;
  opacity: 0.15;
}

.deco-1 {
  width: 500px;
  height: 500px;
  background: linear-gradient(135deg, #00b7c3, #0078d4);
  top: 10%;
  right: 5%;
}

.deco-2 {
  width: 300px;
  height: 300px;
  background: linear-gradient(135deg, #0078d4, #005a9e);
  top: 50%;
  right: 25%;
}

.deco-3 {
  width: 200px;
  height: 200px;
  background: linear-gradient(135deg, #00b7c3, #50e6ff);
  top: 5%;
  right: 35%;
}
</style>
