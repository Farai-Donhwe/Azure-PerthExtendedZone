<!-- End slide — Azure branded closing, full-page -->
<template>
  <div class="slidev-layout azure-end">
    <div class="end-left">
      <div class="ms-logo-end">
        <svg width="28" height="28" viewBox="0 0 21 21" fill="none">
          <rect width="10" height="10" fill="#f25022"/>
          <rect x="11" width="10" height="10" fill="#7fba00"/>
          <rect y="11" width="10" height="10" fill="#00a4ef"/>
          <rect x="11" y="11" width="10" height="10" fill="#ffb900"/>
        </svg>
      </div>
      <div class="end-text">
        <slot />
      </div>
    </div>
    <div class="end-right">
      <div class="end-deco">
        <div class="end-blob end-blob-1"></div>
        <div class="end-blob end-blob-2"></div>
        <div class="end-blob end-blob-3"></div>
      </div>
    </div>
  </div>
</template>

<style>
.azure-end {
  display: flex;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
  position: relative;
  background: linear-gradient(160deg, #002050 0%, #003580 40%, #0053a6 100%);
}

.azure-end::before {
  display: none;
}

.end-left {
  flex: 0 0 55%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem 3rem 4rem 5rem;
  z-index: 2;
  position: relative;
}

.end-left::after {
  content: '';
  position: absolute;
  top: -10%;
  right: -80px;
  width: 200px;
  height: 120%;
  background: linear-gradient(160deg, #002050 0%, #003580 40%, #0053a6 100%);
  transform: skewX(-6deg);
  z-index: 1;
}

.ms-logo-end {
  margin-bottom: 2em;
  position: relative;
  z-index: 2;
}

.end-text {
  position: relative;
  z-index: 2;
}

.azure-end h1 {
  color: white;
  font-size: 2.8em;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 0.2em;
}

.azure-end h2 {
  color: rgba(255,255,255,0.8);
  font-weight: 400;
  font-size: 1.2em;
}

.azure-end p {
  color: rgba(255,255,255,0.6);
}

.azure-end a {
  color: #50e6ff;
  border-bottom-color: rgba(80, 230, 255, 0.3);
}

.azure-end a:hover {
  border-bottom-color: #50e6ff;
}

.end-right {
  flex: 0 0 45%;
  position: relative;
  overflow: hidden;
}

.end-deco {
  position: absolute;
  inset: 0;
}

.end-blob {
  position: absolute;
  border-radius: 50%;
}

.end-blob-1 {
  width: 400px;
  height: 400px;
  background: linear-gradient(135deg, rgba(0, 183, 195, 0.25), rgba(80, 230, 255, 0.15));
  top: -5%;
  right: -10%;
}

.end-blob-2 {
  width: 250px;
  height: 250px;
  background: linear-gradient(135deg, rgba(77, 184, 255, 0.2), rgba(0, 120, 212, 0.12));
  top: 55%;
  right: 20%;
}

.end-blob-3 {
  width: 150px;
  height: 150px;
  background: linear-gradient(135deg, rgba(0, 183, 195, 0.2), rgba(80, 230, 255, 0.1));
  top: 15%;
  right: 50%;
}
</style>
