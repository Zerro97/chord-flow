<script setup lang="ts">
const current_note = ref(note[0]);

const on_start = () => {
  setInterval(() => {
    
  }, 1000);
}
</script>

<template>
  <div class="flex flex-col bg-black h-screen overflow-hidden">
    <div class="flex w-full h-full">
      <SideBar />
      <div class="flex flex-col justify-center items-center w-full relative">
        <p class="text-6xl">{{ current_note }}</p>
        <UButton 
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
