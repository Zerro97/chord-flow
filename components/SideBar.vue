<script setup lang="ts">
const bpm = ref(100)

const time_signatures = ref(["4/4", "3/4", "2/4", "6/8"])
const current_time_signature = ref("4/4")

const keys = ref(["C", "D", "E", "F", "G", "A", "B"])
const current_key = ref("C")

const scales = ref(["Major", "Minor"])
const current_scale = ref("Major")
</script>

<template>
  <div class="flex flex-col gap-y-6 h-screen w-[280px] px-4 py-2 bg-zinc-900 border-r border-zinc-800">
    <UFormField label="BPM">
      <UInputNumber v-model="bpm" :min="0" :max="200"/>
    </UFormField>
    <UFormField label="Time Signature">
      <URadioGroup v-model="current_time_signature" :items="time_signatures" />
    </UFormField>
    <UFormField label="Key">
      <USelect v-model="current_key" :items="keys"/>
    </UFormField>
    <UFormField label="Scale">
      <USelect v-model="current_scale" :items="scales"/>
    </UFormField>
  </div>
</template>