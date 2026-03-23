<script setup>
import { computed } from 'vue'
import { useNav } from '@slidev/client'

const { currentSlideNo, go } = useNav()

const sections = [
  { label: 'Cover', slide: 1 },
  { label: 'Overview', slide: 3 },
  { label: 'Perth EZ', slide: 5 },
  { label: 'Deployment', slide: 7 },
  { label: 'Services', slide: 8 },
  { label: 'Networking', slide: 10 },
  { label: 'BCDR', slide: 13 },
  { label: 'Security', slide: 14 },
  { label: 'Resource Org', slide: 16 },
  { label: 'Management', slide: 17 },
  { label: 'Observability', slide: 18 },
  { label: 'Design', slide: 19 },
  { label: 'Pricing', slide: 20 },
  { label: 'Competitive', slide: 21 },
  { label: 'Next Steps', slide: 22 },
  { label: 'Appendix', slide: 24 },
]

const showNav = computed(() => currentSlideNo.value >= 2)

const activeIndex = computed(() => {
  const slide = currentSlideNo.value
  for (let i = sections.length - 1; i >= 0; i--) {
    if (slide >= sections[i].slide) return i
  }
  return 0
})

function navigate(slide) {
  go(slide)
}
</script>

<template>
  <div class="slide-nav" v-if="showNav">
    <div class="nav-track">
      <div class="nav-line"></div>
      <div class="nav-progress" :style="{ height: `${(activeIndex / (sections.length - 1)) * 100}%` }"></div>

      <div
        v-for="(sec, i) in sections"
        :key="sec.label"
        class="nav-node"
        :class="{ active: i === activeIndex, visited: i < activeIndex }"
        :style="{ top: `${(i / (sections.length - 1)) * 100}%` }"
        @click="navigate(sec.slide)"
        :title="sec.label"
      >
        <div class="node-dot">
          <div class="node-glow" v-if="i === activeIndex"></div>
        </div>
        <span class="node-label">{{ sec.label }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.slide-nav {
  position: fixed;
  left: 8px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;
  pointer-events: auto;
}

.nav-track {
  position: relative;
  height: 460px;
  width: 110px;
}

.nav-line {
  position: absolute;
  left: 7px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: #d2d2d2;
  border-radius: 1px;
}

.nav-progress {
  position: absolute;
  left: 7px;
  top: 0;
  width: 2px;
  background: linear-gradient(180deg, #00b7c3, #0078d4);
  border-radius: 1px;
  transition: height 0.4s ease;
}

.nav-node {
  position: absolute;
  left: 0;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.node-dot {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 2.5px solid #d2d2d2;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.nav-node.visited .node-dot {
  border-color: #0078d4;
  background: #0078d4;
}

.nav-node.active .node-dot {
  border-color: #0078d4;
  background: #0078d4;
  width: 18px;
  height: 18px;
}

.node-glow {
  position: absolute;
  inset: -6px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0, 120, 212, 0.4) 0%, transparent 70%);
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 0.7; }
  50% { transform: scale(1.5); opacity: 0.15; }
}

.node-label {
  font-size: 0.55em;
  font-weight: 500;
  color: #6e6e6e;
  white-space: nowrap;
  opacity: 0;
  transform: translateX(-3px);
  transition: all 0.2s ease;
  pointer-events: none;
  font-family: 'Segoe UI', system-ui, sans-serif;
}

.nav-node:hover .node-label,
.nav-node.active .node-label {
  opacity: 1;
  transform: translateX(0);
}

.nav-node.active .node-label {
  color: #0078d4;
  font-weight: 700;
}

.nav-node:hover .node-dot {
  border-color: #00b7c3;
  transform: scale(1.15);
}

/* Dark mode */
:global(html.dark) .nav-line { background: #3a3a3a; }
:global(html.dark) .node-dot { border-color: #4a4a4a; background: #1e1e1e; }
:global(html.dark) .nav-node.visited .node-dot { border-color: #4db8ff; background: #4db8ff; }
:global(html.dark) .nav-node.active .node-dot { border-color: #4db8ff; background: #4db8ff; }
:global(html.dark) .node-glow { background: radial-gradient(circle, rgba(77, 184, 255, 0.4) 0%, transparent 70%); }
:global(html.dark) .node-label { color: #a0a0a0; }
:global(html.dark) .nav-node.active .node-label { color: #4db8ff; }
:global(html.dark) .nav-node:hover .node-dot { border-color: #40d9e2; }

@media (max-height: 500px) { .slide-nav { display: none; } }
@media print { .slide-nav { display: none; } }
</style>
