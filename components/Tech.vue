<template>
  <section
    class="grid sm:grid-cols-3 grid-cols-2 md:grid-cols-4 gap-2 items-center"
  >
    <div
      class="border border-zinc-800 rounded-lg p-3 flex flex-col items-center group hover:bg-zinc-900 duration-300"
    >
      <svg
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        class="group-hover:-translate-y-1 size-6 transition-all duration-300 text-[#E34F26]"
      >
        <title>HTML5</title>
        <path
          fill="currentColor"
          d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"
        ></path>
      </svg>
      <p class="text-gray-400 text-xs mt-2">HTML 5</p>
    </div>
    <div
      class="border border-zinc-800 rounded-lg p-3 flex flex-col items-center group hover:bg-zinc-900 duration-300"
    >
      <svg
        class="group-hover:-translate-y-1 size-6 transition-all duration-300 text-[#639]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 1000"
        role="img"
        aria-labelledby="css-logo-title css-logo-description"
      >
        <title id="css-logo-title">CSS Logo</title>
        <desc id="css-logo-description">
          A purple square with rounded corners and the letters CSS inside in
          white
        </desc>
        <path
          fill="currentColor"
          d="M0 0H840A160 160 0 0 1 1000 160V840A160 160 0 0 1 840 1000H160A160 160 0 0 1 0 840V0Z"
        ></path>
        <path
          class="fill-black dark:fill-background"
          d="M253 817V649c0-67 43-103 108-103 64-1 104 41 102 112h-74c2-27-10-47-30-46-25 0-32 17-32 49v146c0 31 10 46 32 47 23 0 32-23 30-49h74c4 73-42 116-107 115-63 0-103-35-103-103Zm237-12h69c1 32 11 52 33 52s30-13 30-43c0-25-11-39-38-52l-26-12c-46-22-65-49-65-103 0-60 38-102 100-102s95 43 96 113h-67c0-29-6-49-28-49-20 0-30 10-30 35s9 35 33 45l24 11c51 24 73 55 73 113 0 69-39 107-103 107s-100-44-101-115Zm226 0h70c0 32 11 52 32 52s30-13 30-43c0-25-10-39-38-52l-26-12c-46-22-64-49-64-103 0-60 37-102 100-102s94 43 96 113h-67c-1-29-7-49-29-49-20 0-29 10-29 35s8 35 32 45l25 11c50 24 72 55 72 113 0 69-39 107-103 107s-100-44-101-115Z"
        ></path>
      </svg>
      <p class="text-gray-400 text-xs mt-2">CSS</p>
    </div>
    <div
      class="border border-zinc-800 rounded-lg p-3 flex flex-col items-center group hover:bg-zinc-900 duration-300"
    >
      <svg
        viewBox="0 0 24 24"
        class="sm:group-hover:-translate-y-1 size-6 transition-all duration-300 text-[#06B6D4]"
      >
        <title>Tailwind CSS</title>
        <path
          d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"
          fill="currentColor"
        ></path>
      </svg>
      <p class="text-gray-400 text-xs mt-2">Tailwind CSS</p>
    </div>
    <div
      class="border border-zinc-800 rounded-lg p-3 flex flex-col items-center group hover:bg-zinc-900 duration-300"
    >
      <svg
        class="group-hover:-translate-y-1 size-6 transition-all duration-300 text-white"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M4.98488 2C3.61546 2 2.60217 3.19858 2.64753 4.49844C2.69105 5.74725 2.63451 7.36461 2.22732 8.68359C1.81892 10.0064 1.1282 10.8444 0 10.952V12.1666C1.1282 12.2742 1.81892 13.1122 2.22732 14.4351C2.63451 15.754 2.69105 17.3714 2.64753 18.6202C2.60217 19.9199 3.61546 21.1186 4.98508 21.1186H19.0169C20.3864 21.1186 21.3995 19.9201 21.3541 18.6202C21.3106 17.3714 21.3671 15.754 21.7743 14.4351C22.1829 13.1122 22.8718 12.2742 24 12.1666V10.952C22.8718 10.8444 22.1829 10.0064 21.7743 8.68359C21.3671 7.36481 21.3106 5.74725 21.3541 4.49844C21.3995 3.19878 20.3864 2 19.0169 2H4.98468H4.98488ZM16.2712 13.7687C16.2712 15.5586 14.9361 16.6441 12.7206 16.6441H8.94915C8.84127 16.6441 8.7378 16.6012 8.66152 16.5249C8.58523 16.4486 8.54237 16.3452 8.54237 16.2373V6.88136C8.54237 6.77347 8.58523 6.67001 8.66152 6.59372C8.7378 6.51743 8.84127 6.47458 8.94915 6.47458H12.6991C14.5464 6.47458 15.7588 7.47525 15.7588 9.01166C15.7588 10.09 14.9433 11.0555 13.9041 11.2245V11.2809C15.3187 11.4361 16.2712 12.4156 16.2712 13.7687ZM12.3094 7.76407H10.1589V10.8015H11.9701C13.3702 10.8015 14.1423 10.2377 14.1423 9.2299C14.1423 8.28556 13.4784 7.76407 12.3094 7.76407ZM10.1589 12.0068V15.3542H12.3885C13.8462 15.3542 14.6184 14.7692 14.6184 13.6699C14.6184 12.5704 13.8246 12.0066 12.2947 12.0066H10.1589V12.0068Z"
          class="fill-[#2B1E3E]"
        />
      </svg>
      <p class="text-gray-400 text-xs mt-2">Bootstrap</p>
    </div>
    <div
      class="border border-zinc-800 rounded-lg p-3 flex flex-col items-center group hover:bg-zinc-900 duration-300"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        class="group-hover:-translate-y-1 size-6 transition-all duration-300"
      >
        <title>Nuxt</title>
        <path
          d="M10.648,25.734a1.465,1.465,0,0,1-.157-.942H3.847L13.716,7.417l4.159,7.41,1.308-.976L15.076,6.467A1.752,1.752,0,0,0,13.7,5.56a1.531,1.531,0,0,0-1.343.924l-10,17.593a1.729,1.729,0,0,0-.087,1.656,1.526,1.526,0,0,0,1.456.706H12.1a1.523,1.523,0,0,1-1.456-.7Z"
          class="fill-[#00c58e]"
        />
        <path
          d="M29.636,24.112,21.589,9.823a1.692,1.692,0,0,0-1.351-.907,1.489,1.489,0,0,0-1.308.907l-1.064,1.7v3.3l2.371-4.071,7.951,14.071H25.163a1.377,1.377,0,0,1-.122.837l-.026.052a1.729,1.729,0,0,1-1.456.732h4.734a1.72,1.72,0,0,0,1.456-.732,1.548,1.548,0,0,0-.122-1.6Z"
          class="fill-[#00c58e]"
        />
        <path
          d="M25.233,25.7l.026-.052.07-.139a1.278,1.278,0,0,0,.061-.7,2.11,2.11,0,0,0-.27-.724l-6.286-10.9-.95-1.656h-.017l-.959,1.648-6.277,10.9a2.18,2.18,0,0,0-.244.715,1.438,1.438,0,0,0,.148.942,1.563,1.563,0,0,0,1.482.7H23.725a1.79,1.79,0,0,0,1.508-.741ZM17.866,14.836,23.62,24.8H12.112Z"
          class="fill-[#00c58e]"
        />
      </svg>
      <p class="text-gray-400 text-xs mt-2">Nuxt</p>
    </div>
    <div
      class="border border-zinc-800 rounded-lg p-3 flex flex-col items-center group hover:bg-zinc-900 duration-300"
    >
      <svg
        class="group-hover:-translate-y-1 size-6 transition-all duration-300 text-white"
        viewBox="0 0 64 64"
        version="1.1"
        xml:space="preserve"
        style="
          fill-rule: evenodd;
          clip-rule: evenodd;
          stroke-linejoin: round;
          stroke-miterlimit: 2;
        "
      >
        <g id="vue">
          <path
            d="M17.595,11.204l8.91,0l5.536,9.391l5.591,-9.391l8.831,0l-14.422,25.359l-14.446,-25.359Z"
            class="fill-[#435466]"
          />

          <path
            d="M8.089,11.204l23.952,41.845l24.126,-41.845l-9.704,0l-14.422,25.359l-14.446,-25.359l-9.506,0Z"
            class="fill-[#4dba87]"
          />
        </g>
      </svg>
      <p class="text-gray-400 text-xs mt-2">Vue</p>
    </div>
    <div
      class="border border-zinc-800 rounded-lg p-3 flex flex-col items-center group hover:bg-zinc-900 duration-300"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="none"
        class="group-hover:-translate-y-1 size-6 transition-all duration-300 text-white"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M16 16C16 13.7909 17.7909 12 20 12C22.2091 12 24 13.7909 24 16C24 18.2091 22.2091 20 20 20C17.7909 20 16 18.2091 16 16Z"
          class="fill-[#1ABCFE]"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8 24C8 21.7909 9.79086 20 12 20H16V24C16 26.2091 14.2091 28 12 28C9.79086 28 8 26.2091 8 24Z"
          class="fill-[#0ACF83]"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M16 4V12H20C22.2091 12 24 10.2091 24 8C24 5.79086 22.2091 4 20 4H16Z"
          class="fill-[#FF7262]"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8 8C8 10.2091 9.79086 12 12 12H16V4H12C9.79086 4 8 5.79086 8 8Z"
          class="fill-[#F24E1E]"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8 16C8 18.2091 9.79086 20 12 20H16V12H12C9.79086 12 8 13.7909 8 16Z"
          class="fill-[#A259FF]"
        />
      </svg>
      <p class="text-gray-400 text-xs mt-2">Figma</p>
    </div>
    <div
      class="border border-zinc-800 rounded-lg p-3 flex flex-col items-center group hover:bg-zinc-900 duration-300"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="none"
        class="group-hover:-translate-y-1 size-6 transition-all duration-300 text-white"
      >
        <path
          d="M2.58536 17.4132C1.80488 16.6327 1.80488 15.3673 2.58536 14.5868L14.5868 2.58536C15.3673 1.80488 16.6327 1.80488 17.4132 2.58536L29.4146 14.5868C30.1951 15.3673 30.1951 16.6327 29.4146 17.4132L17.4132 29.4146C16.6327 30.1951 15.3673 30.1951 14.5868 29.4146L2.58536 17.4132Z"
          fill="#EE513B"
        />
        <path
          d="M12.1489 5.06152L10.9336 6.27686L14.0725 9.41577C13.9455 9.68819 13.8746 9.99201 13.8746 10.3124C13.8746 11.222 14.4461 11.9981 15.2496 12.3012V19.9798C14.4461 20.2829 13.8746 21.059 13.8746 21.9686C13.8746 23.1422 14.826 24.0936 15.9996 24.0936C17.1732 24.0936 18.1246 23.1422 18.1246 21.9686C18.1246 21.144 17.6549 20.429 16.9684 20.0768V12.3117L19.9689 15.3122C19.8481 15.5791 19.7809 15.8754 19.7809 16.1874C19.7809 17.361 20.7323 18.3124 21.9059 18.3124C23.0795 18.3124 24.0309 17.361 24.0309 16.1874C24.0309 15.0138 23.0795 14.0624 21.9059 14.0624C21.6778 14.0624 21.4582 14.0983 21.2522 14.1648L18.0297 10.9423C18.0914 10.7433 18.1246 10.5317 18.1246 10.3124C18.1246 9.13878 17.1732 8.18738 15.9996 8.18738C15.7803 8.18738 15.5688 8.22061 15.3697 8.2823L12.1489 5.06152Z"
          fill="white"
        />
      </svg>
      <p class="text-gray-400 text-xs mt-2">Git</p>
    </div>
  </section>
</template>

<script setup></script>
