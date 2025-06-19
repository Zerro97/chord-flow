<script setup lang="ts">
// Selected Filter Values
const current_bpm = ref(100)
const current_time_signature = ref("4/4")
const current_scale = ref("major")
const current_key = ref("C")

// Computed Values
const current_notes = computed<string[]>(() => get_scale_notes(current_key.value, current_scale.value))
const current_index = ref(0)

const on_start = () => {
  setInterval(() => {
    current_index.value = (current_index.value + 1) % current_notes.value.length
  }, 1000);
}
</script>

<template>
  <div class="flex flex-col bg-black h-screen overflow-hidden">
    <div class="flex w-full h-full">
      <SideBar 
        v-model:current_bpm="current_bpm"
        v-model:current_time_signature="current_time_signature"
        v-model:current_scale="current_scale"
        v-model:current_key="current_key"
      />
      <div class="flex flex-col justify-center items-center gap-y-20 w-full relative">
        <NoteList 
          class="absolute top-4" 
          :current_notes="current_notes"
          :current_index="current_index"
        />
        <NoteDisplay 
          v-model:current_notes="current_notes"
          v-model:current_index="current_index"
        />
        <TempoDisplay 
          :time_signature="current_time_signature"
        />
        <UButton 
          @click="on_start()"
          icon="i-lucide-play" 
          class="absolute bottom-10 text-zinc-500 hover:cursor-pointer rounded-full w-15 h-15 bg-zinc-900/50 hover:bg-zinc-900 flex justify-center items-center" 
        />
      </div>
    </div>
    <div class="flex justify-center items-center w-full py-1 bg-black border-t border-zinc-800">
      <p class="text-zinc-500 text-sm">Made with NUXT</p>
    </div>
  </div>
</template>
