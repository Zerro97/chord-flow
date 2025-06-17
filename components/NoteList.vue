<script setup lang="ts">
defineProps<{
  current_notes: string[]
}>()
</script>

<template>
  <div class="bg-zinc-900 border border-zinc-800 rounded-xl flex gap-x-4 items-center px-4 py-1">
    <p v-for="note in current_notes" :key="note">{{ note }}</p>
  </div>
</template>