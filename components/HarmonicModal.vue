<script setup lang="ts">
const current_chord_progression = defineModel<string>('current_chord_progression')
const major_progressions = [
  "cadence_authentic",
  "perfect_cadence",
  "plagal_cadence	",
  "pop_progression",
  "doo_wop",
  "50s_ballad",
  "circle_of_fifths",
]
const minor_progressions = [
  "natural_minor_cadence",
  "harmonic_minor",
  "sad_loop",
  "descending_bass",
  "andalusian_cadence",
]
</script>

<template>
  <UModal>
    <UButton label="Harmonic Options" color="neutral" variant="ghost" trailing-icon="i-lucide-chevron-right" />

    <template #content>
      <div class="px-4 pt-2 pb-3">
        <h1 class="font-bold text-2xl mb-2">Harmonic</h1>
        <div class="flex">
          <div class="flex flex-col w-full">
            <p class="mb-1">Major</p>
            <URadioGroup v-model="current_chord_progression" :items="major_progressions" />
          </div>
          <div class="flex flex-col w-full">
            <p class="mb-1">Minor</p>
            <URadioGroup v-model="current_chord_progression" :items="minor_progressions" />
          </div>
        </div>
      </div>
    </template>
  </UModal>
</template>