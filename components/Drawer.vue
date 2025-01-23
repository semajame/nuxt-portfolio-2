<script setup lang="ts">
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'

defineProps({
  eventData: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <Drawer>
    <DrawerTrigger as-child>
      <Button
        variant="outline"
        class="text-xs hover:text-black hover:bg-white transition-all duration-200 py-0 ease-in-out"
      >
        View
      </Button>
    </DrawerTrigger>
    <DrawerContent class="bg-zinc-950 border border-zinc-900">
      <div class="max-w-[500px] h-full mt-5 mx-auto px-5">
        <NuxtImg
          :src="eventData.image"
          format="webp"
          densities="x1"
          :alt="`${eventData.title}, Image`"
          loading="lazy"
        />
      </div>
    </DrawerContent>
  </Drawer>
</template>
