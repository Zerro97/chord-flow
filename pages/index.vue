<script setup lang="ts">
import * as Tone from "tone";

// Selected Filter Values
const current_bpm = ref(100)
const current_time_signature = ref("4/4")
const current_scale = ref("major")
const current_key = ref("C")
const current_volume = ref(25)
const current_chord_progression = ref("cadence_authentic")
const current_synth_type = ref('click')
const current_style = ref('harmonic')

// Computed Values
const current_notes = computed<string[]>(() => get_scale_notes(current_key.value, current_scale.value))
const current_index = ref(0)

// State
const is_metronome_playing = ref(false)
const metronome_count = ref(0)

watch(is_metronome_playing, async () => {
  const context = Tone.getContext()
  if(context.state != "running") {
    Tone.start()
    set_metronome(current_volume.value, current_bpm.value, current_time_signature.value, "stuff", metronome_count)
  }

  if(is_metronome_playing.value) {
    start_metronome()
  } else {
    stop_metronome()
  }
})
</script>

<template>
  <div class="flex flex-col bg-black h-screen overflow-hidden">
    <div class="flex w-full h-full">
      <SideBar 
        v-model:current_bpm="current_bpm"
        v-model:current_time_signature="current_time_signature"
        v-model:current_scale="current_scale"
        v-model:current_key="current_key"
        v-model:current_volume="current_volume"
        v-model:current_chord_progression="current_chord_progression"
        v-model:current_style="current_style"
        v-model:current_synth_type="current_synth_type"
      />
      <div class="flex flex-col justify-center items-center gap-y-20 w-full relative">
        <NoteList 
          v-model:metronome_count="metronome_count"
          class="absolute top-4" 
          :current_notes="current_notes"
        />
        <NoteDisplay 
          v-model:metronome_count="metronome_count"
          v-model:current_notes="current_notes"
          v-model:current_index="current_index"
        />
        <TempoDisplay 
          v-model:metronome_count="metronome_count"
          :time_signature="current_time_signature"
        />
        <UButton 
          :icon="`${is_metronome_playing ? 'i-lucide-pause' : 'i-lucide-play'}`" 
          :class="`absolute bottom-10 text-zinc-500 hover:cursor-pointer rounded-full border-zinc-800 ${is_metronome_playing ? 'bg-zinc-900' : 'bg-zinc-900/50'} border-2 w-15 h-15 hover:bg-zinc-900 flex justify-center items-center`" 
          @click="is_metronome_playing = !is_metronome_playing"
        />
      </div>
    </div>
    <div class="flex justify-center items-center w-full py-1 bg-black border-t border-zinc-800">
      <p class="text-zinc-500 text-sm">Made with NUXT</p>
    </div>
  </div>
</template>
