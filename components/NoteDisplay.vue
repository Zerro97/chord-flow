<script setup lang="ts">
const metronome_count = defineModel<string>('metronome_count')
const current_notes = defineModel("current_notes")
const wrappedNotes = computed(() => {
  const notes = current_notes.value;
  const index = Math.floor(metronome_count.value / 4);
  const len = notes.length;

  // Get indices: x-2, x-1, x, x+1, x+2 with wrap
  return [-2, -1, 0, +1, +2].map(offset => {
    const wrappedIndex = (index + offset + len) % len;
    return notes[wrappedIndex];
  });
});
</script>

<template>
  <div class="flex gap-x-[100px] items-center">
    <p class="text-2xl text-zinc-800">{{ wrappedNotes[0] }}</p>
    <p class="text-4xl text-zinc-600">{{ wrappedNotes[1] }}</p>
    <p class="text-6xl">{{ wrappedNotes[2] }}</p>
    <p class="text-4xl text-zinc-600">{{ wrappedNotes[3] }}</p>
    <p class="text-2xl text-zinc-800">{{ wrappedNotes[4] }}</p>
  </div>
</template>