<script setup lang="ts">
const experiences = [
  {
    title: 'BS Information Technology',
    location: ' Benedicto College',
    year: 2025,
  },
  {
    title: 'Freelance Frontend Developer',
    location: ' Mandaue City ',
    year: 2024,
  },
  {
    title: 'Tour De Tech',
    location: ' Bai Hotel',
    year: 2024,
  },
  {
    title: 'Cebu Interschool Hackathon',
    location: ' Provincial Capitol',
    year: 2024,
  },
  {
    title: 'Cebu Interschool Hackathon',
    location: ' Northwinds Hotel',
    year: 2023,
  },
]

const events = [
  {
    title: 'Tour De Tech',
    location: 'Bai Hotel',
    image: '/assets/bai-hotel.jpg',
    year: 2024,
  },
  {
    title: 'Tour De Tech: Talent Caravan',
    location: 'Bai Hotel',
    image: '/assets/bai.jpg',
    year: 2024,
  },
  {
    title: 'Cebu ICT Student Congress',
    location: 'CTU Main',
    image: '/assets/psite.jpg',
    year: 2024,
  },
  {
    title: 'Cebu Interschool Hackathon',
    location: 'Provincial Capitol',
    image: '/assets/lexmark.jpg',
    year: 2024,
  },
  {
    title: 'Cebu Interschool Hackathon',
    location: 'Northwinds Hotel',
    image: '/assets/jobtarget.jpg',
    year: 2023,
  },
]
</script>

<template>
  <Tabs default-value="experience" class="w-full mt-10">
    <TabsList class="grid w-full grid-cols-2 bg-zinc-900">
      <TabsTrigger value="experience" class="text-gray-300">
        Experience
      </TabsTrigger>
      <TabsTrigger value="certificate" class="text-gray-300">
        Certificates
      </TabsTrigger>
    </TabsList>
    <TabsContent value="experience">
      <div class="relative border border-zinc-900 rounded-md px-5 dark">
        <div
          class="flex sm:justify-between items-start mt-5 flex-col gap-2 sm:flex-row"
        >
          <h3 class="font-bold flex items-center gap-3 text-2xl text-white">
            <svg
              data-testid="geist-icon"
              height="17"
              stroke-linejoin="round"
              viewBox="0 0 16 16"
              width="17"
              style="color: currentcolor"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6 2.5H10C10.2761 2.5 10.5 2.72386 10.5 3V4H5.5V3C5.5 2.72386 5.72386 2.5 6 2.5ZM4 4V3C4 1.89543 4.89543 1 6 1H10C11.1046 1 12 1.89543 12 3V4H14.5H16V5.5V13.5C16 14.8807 14.8807 16 13.5 16H2.5C1.11929 16 0 14.8807 0 13.5V5.5V4H1.5H4ZM12 5.5H10.5H5.5H4H1.5V9.25H7.25V8.5H8.75V9.25L14.5 9.25V5.5H12ZM8.75 10.75L14.5 10.75V13.5C14.5 14.0523 14.0523 14.5 13.5 14.5H2.5C1.94772 14.5 1.5 14.0523 1.5 13.5V10.75H7.25V11.5H8.75V10.75Z"
                fill="currentColor"
              ></path></svg
            >Experience
          </h3>
          <NuxtLink
            to="https://docs.google.com/document/d/112OLJD-Xgj8ZFYq11TL0M48Pj4RzdJum/edit?usp=sharing&ouid=101439099929747855943&rtpof=true&sd=true"
            target="_blank"
            class="btn bg-gradient-to-r from-gray-900 to-gray-950 text-white px-2 py-1.5 border rounded-md text-xs flex justify-center items-center gap-1 transition-all duration-200 border-gray-800"
          >
            <svg
              data-testid="geist-icon"
              height="14"
              stroke-linejoin="round"
              viewBox="0 0 16 16"
              width="14"
              style="color: currentcolor"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.5 4V6H2.5V2.5H6L7.33333 3.5C7.76607 3.82456 8.29241 4 8.83333 4H13.5ZM1 6V2.5V1H2.5H6.16667C6.38304 1 6.59357 1.07018 6.76667 1.2L8.23333 2.3C8.40643 2.42982 8.61696 2.5 8.83333 2.5H13.5H15V4V6H16L15.8333 7.5L15.2471 12.7761C15.1064 14.0422 14.0363 15 12.7624 15H3.23761C1.96373 15 0.893573 14.0422 0.752898 12.7761L0.166667 7.5L0 6H1ZM14 7.5H2H1.6759L2.24372 12.6104C2.29999 13.1169 2.72806 13.5 3.23761 13.5H12.7624C13.2719 13.5 13.7 13.1169 13.7563 12.6104L14.3241 7.5H14Z"
                fill="currentColor"
              ></path>
            </svg>
            View Resume</NuxtLink
          >
        </div>
        <div class="flex flex-col items-start space-y-6 py-5 text-white my-5">
          <!-- Experience Entry 1 (Latest) -->
          <div
            v-for="(entry, index) in experiences"
            :key="index"
            class="flex items-center space-x-4 w-full group z-10 relative"
          >
            <div class="flex-none">
              <div
                class="w-2.5 h-2.5 bg-black group-hover:bg-white transition duration-300 border border-white rounded-full"
              ></div>
            </div>
            <div class="w-full">
              <p class="text-sm font-semibold">{{ entry.title }}</p>
              <div class="flex justify-between items-center">
                <p class="text-xs text-gray-400">{{ entry.location }}</p>
                <div
                  class="border border-gray-500 px-2 py-0.5 text-xs rounded-full flex justify-center items-center gap-1 text-white"
                >
                  {{ entry.year }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TabsContent>
    <TabsContent value="certificate">
      <div class="relative border border-zinc-900 rounded-md px-5 dark">
        <div
          class="flex sm:justify-between items-start mt-5 flex-col gap-2 sm:flex-row"
        >
          <h3 class="font-bold flex items-center gap-3 text-2xl text-white">
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              ></path></svg
            >Certificates
          </h3>
          <NuxtLink
            to="https://drive.google.com/drive/folders/1g35mdvLg36uXAVcHVSzVoacuqiZEz1VY?usp=sharing"
            target="_blank"
            class="btn bg-gradient-to-r from-gray-900 to-gray-950 text-white px-2 py-1.5 border rounded-md text-xs flex justify-center items-center gap-1 transition-all duration-200 border-gray-800"
          >
            <svg
              data-testid="geist-icon"
              height="14"
              stroke-linejoin="round"
              viewBox="0 0 16 16"
              width="14"
              style="color: currentcolor"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.5 4V6H2.5V2.5H6L7.33333 3.5C7.76607 3.82456 8.29241 4 8.83333 4H13.5ZM1 6V2.5V1H2.5H6.16667C6.38304 1 6.59357 1.07018 6.76667 1.2L8.23333 2.3C8.40643 2.42982 8.61696 2.5 8.83333 2.5H13.5H15V4V6H16L15.8333 7.5L15.2471 12.7761C15.1064 14.0422 14.0363 15 12.7624 15H3.23761C1.96373 15 0.893573 14.0422 0.752898 12.7761L0.166667 7.5L0 6H1ZM14 7.5H2H1.6759L2.24372 12.6104C2.29999 13.1169 2.72806 13.5 3.23761 13.5H12.7624C13.2719 13.5 13.7 13.1169 13.7563 12.6104L14.3241 7.5H14Z"
                fill="currentColor"
              ></path>
            </svg>
            View Certificates</NuxtLink
          >
        </div>
        <div class="flex flex-col items-start space-y-6 py-5 text-white my-5">
          <!-- Experience Entry 1 (Latest) -->
          <div
            v-for="(event, index) in events"
            :key="index"
            class="flex items-center space-x-4 w-full group z-10 relative"
          >
            <div class="flex-none">
              <div
                class="w-2.5 h-2.5 bg-black group-hover:bg-white transition duration-300 border border-white rounded-full"
              ></div>
            </div>
            <div class="w-full">
              <p class="text-sm font-semibold">{{ event.title }}</p>
              <div class="flex justify-between items-center">
                <p class="text-xs text-gray-400">{{ event.location }}</p>
                <div
                  class="border border-gray-500 px-2 py-0.5 text-xs rounded-full flex justify-center items-center gap-1 text-white"
                >
                  {{ event.year }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TabsContent>
  </Tabs>
</template>
