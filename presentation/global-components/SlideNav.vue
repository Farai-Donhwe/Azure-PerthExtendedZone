<script setup>
import { computed } from 'vue'
import { useNav } from '@slidev/client'

const { currentSlideNo, go } = useNav()

// Navigation sections with slide ranges
const sections = [
  { label: 'Cover', slide: 1, icon: '🏠' },
  { label: 'Overview', slide: 3, icon: '🌏' },
  { label: 'Perth EZ', slide: 5, icon: '📍' },
  { label: 'Deployment', slide: 7, icon: '🏗️' },
  { label: 'Services', slide: 8, icon: '⚙️' },
  { label: 'Networking', slide: 10, icon: '🌐' },
  { label: 'BCDR', slide: 13, icon: '🔄' },
  { label: 'Security', slide: 14, icon: '🔒' },
  { label: 'Design', slide: 15, icon: '📋' },
  { label: 'Competitive', slide: 17, icon: '⚔️' },
  { label: 'Next Steps', slide: 18, icon: '🚀' },
  { label: 'Appendix', slide: 20, icon: '📎' },
]

// Which section owns which slide ranges
const sectionRanges = sections.map((sec, i) => {
  const nextSlide = i < sections.length - 1 ? sections[i + 1].slide : 999
  return { ...sec, from: sec.slide, to: nextSlide - 1 }
})

const activeIndex = computed(() => {
  const slide = currentSlideNo.value
  for (let i = sectionRanges.length - 1; i >= 0; i--) {
    if (slide >= sectionRanges[i].from) return i
  }
  return 0
})

// Progress as percentage
const progress = computed(() => {
  return Math.round((currentSlideNo.value / 21) * 100)
})

function navigate(slide) {
  go(slide)
}
</script>

<template>
  <div class="slide-nav" v-if="currentSlideNo">
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
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;
  pointer-events: auto;
  display: flex;
  align-items: center;
}

.nav-track {
  position: relative;
  height: 420px;
  width: 120px;
}

/* Background line */
.nav-line {
  position: absolute;
  left: 8px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--azure-gray-300, #d2d2d2);
  border-radius: 1px;
}

/* Progress fill */
.nav-progress {
  position: absolute;
  left: 8px;
  top: 0;
  width: 2px;
  background: linear-gradient(180deg, #00b7c3, #0078d4);
  border-radius: 1px;
  transition: height 0.4s ease;
}

/* Node container */
.nav-node {
  position: absolute;
  left: 0;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
}

/* Dot */
.node-dot {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 2.5px solid var(--azure-gray-300, #d2d2d2);
  background: var(--azure-white, #ffffff);
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
  width: 20px;
  height: 20px;
}

/* Glow effect for active node */
.node-glow {
  position: absolute;
  inset: -6px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0, 120, 212, 0.35) 0%, transparent 70%);
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 0.6; }
  50% { transform: scale(1.4); opacity: 0.2; }
}

/* Label */
.node-label {
  font-size: 0.6em;
  font-weight: 500;
  color: var(--azure-gray-500, #6e6e6e);
  white-space: nowrap;
  opacity: 0;
  transform: translateX(-4px);
  transition: all 0.25s ease;
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

/* ============================================================
   Dark mode
   ============================================================ */
:global(html.dark) .nav-line {
  background: #3a3a3a;
}

:global(html.dark) .node-dot {
  border-color: #4a4a4a;
  background: #1e1e1e;
}

:global(html.dark) .nav-node.visited .node-dot {
  border-color: #4db8ff;
  background: #4db8ff;
}

:global(html.dark) .nav-node.active .node-dot {
  border-color: #4db8ff;
  background: #4db8ff;
}

:global(html.dark) .node-glow {
  background: radial-gradient(circle, rgba(77, 184, 255, 0.4) 0%, transparent 70%);
}

:global(html.dark) .node-label {
  color: #a0a0a0;
}

:global(html.dark) .nav-node.active .node-label {
  color: #4db8ff;
}

:global(html.dark) .nav-node:hover .node-dot {
  border-color: #40d9e2;
}

/* Hide on very small viewports or when printing */
@media (max-height: 500px) {
  .slide-nav { display: none; }
}

@media print {
  .slide-nav { display: none; }
}
</style>
