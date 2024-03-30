<script setup lang="ts">
definePageMeta({
    layout: 'dashboard'
})
</script>

<template>
  <main class="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
        <div class="flex items-center">
          <h1 class="text-lg font-semibold md:text-2xl">
            Dashboard
          </h1>
        </div>
        <div class="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
          <div class="flex flex-col items-center gap-1 text-center">
            <h3 class="text-2xl font-bold tracking-tight">
              No useful features here
            </h3>
            <p class="text-sm text-muted-foreground">
              Your log can be viewed by going to the logs tab
            </p>
          </div>
        </div>
      </main>
</template>