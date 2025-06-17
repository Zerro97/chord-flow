<script setup lang="ts">
const chords = ["C", "D", "E", "F", "G", "A", "B"]
const chosen_chord = ref("C");

// setInterval(() => {
//   chosen_chord.value = chords[Math.floor(Math.random() * chords.length)];
// }, 1000);
</script>

<template>
  <div class="bg-black w-screen h-screen flex">
    <SideBar />
    <div class="flex justify-center items-center w-full h-full">
      <div class="bg-zinc-900 rounded-2xl px-10 py-6">
        <p>{{ chosen_chord }}</p>
      </div>
    </div>
  </div>
</template>
