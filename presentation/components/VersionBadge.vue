<script setup>
import { ref, onMounted } from 'vue'

const today = new Date().toLocaleDateString('en-AU', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
})

const commitHash = ref('')
const commitShort = ref('')

onMounted(async () => {
  try {
    const res = await fetch(
      'https://api.github.com/repos/DonFarCreative/Perth-Extended-Zone/commits?per_page=1'
    )
    if (res.ok) {
      const data = await res.json()
      if (data.length > 0) {
        commitHash.value = data[0].sha
        commitShort.value = data[0].sha.substring(0, 7)
      }
    }
  } catch {
    // Fallback: no commit info available
  }
})
</script>

<template>
  <div class="version-badge">
    <span>{{ today }}</span>
    <span v-if="commitShort" class="commit-link">
      · <a :href="`#/21`" title="View changelog">{{ commitShort }}</a>
    </span>
  </div>
</template>

<style scoped>
.version-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.3em;
  background: linear-gradient(135deg, #00b7c3, #0078d4);
  color: white;
  font-weight: 600;
  font-size: 0.9em;
  padding: 0.45em 1.4em;
  border-radius: 999px;
  margin-top: 1em;
}

.commit-link a {
  color: rgba(255, 255, 255, 0.85);
  text-decoration: none;
  font-family: 'Cascadia Code', Consolas, monospace;
  font-size: 0.9em;
  border-bottom: 1px dashed rgba(255, 255, 255, 0.4);
}

.commit-link a:hover {
  color: white;
  border-bottom-color: white;
}
</style>
