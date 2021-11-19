<template>
  <header class="shadow w-screen">
    <nav>
      <nav
        class="
          flex
          items-center
          justify-between
          flex-wrap
          p-6
          bg-orange-500
          text-gray-100
        "
      >
        <div class="flex items-center flex-shrink-0 mr-6">
          <PxIcon class="mr-3" />
          <router-link
            class="font-semibold text-xl tracking-tight colo"
            :to="{ name: 'home' }"
            >
            Exchange
          </router-link>
        </div>
        <div
          class="hidden sm:block
            w-full
            block
            flex-grow
            lg:flex lg:items-center lg:w-auto
          "
        >
          <div class="text-sm lg:flex-grow">
            <router-link class="mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4" 
              v-for="l in links" :key = "l.title" :to = "l.to">
              {{ l.title }}</router-link>
          </div>
        </div>
        
      </nav>
    </nav>
  </header>
</template>

<script>
import PxIcon from "./PxIcon.vue";
export default {
  name: "PxHeader",
  components: { PxIcon },
  props: {
    links:{
      type : Array,
      default: () => []
    }
  }
};
</script>
