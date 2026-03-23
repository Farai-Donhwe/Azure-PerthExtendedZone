<!-- End slide — Azure branded thank you -->
<template>
  <div class="slidev-layout azure-end">
    <div class="end-content">
      <div class="ms-logo-end">
        <svg width="28" height="28" viewBox="0 0 21 21" fill="none">
          <rect width="10" height="10" fill="#f25022"/>
          <rect x="11" width="10" height="10" fill="#7fba00"/>
          <rect y="11" width="10" height="10" fill="#00a4ef"/>
          <rect x="11" y="11" width="10" height="10" fill="#ffb900"/>
        </svg>
      </div>
      <slot />
    </div>
  </div>
</template>

<style>
.azure-end {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: linear-gradient(135deg, #002050 0%, #0053a6 100%);
  padding: 3rem;
  position: relative;
  overflow: hidden;
}

.azure-end::before {
  background: rgba(255,255,255,0.1);
}

.end-content {
  z-index: 2;
}

.ms-logo-end {
  margin-bottom: 1.5em;
}

.azure-end h1 {
  color: white;
  font-size: 2.5em;
}

.azure-end h2 {
  color: rgba(255,255,255,0.8);
  font-weight: 400;
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
</style>
