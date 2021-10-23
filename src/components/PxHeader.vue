<template>
    <header class="shadow w-screen">
        <nav>
            <nav class="flex items-center justify-between flex-wrap p-6 bg-orange-500 text-gray-100">
                <div class="flex items-center flex-shrink-0 mr-6">
                    <PxIcon class="mr-3"/>
                    <span class="font-semibold text-xl tracking-tight colo"> Exchange </span>
                </div>
                <div class="hidden sm:block w-full blok flex-grow lg:flex lg:items-center lg:wauto">
                   <div class="text-sm lg:flex-grow"></div>
                </div>
            </nav>
        </nav>
    </header>
</template>

<script>
import PxIcon from './PxIcon.vue'
export default {
    name: 'PxHeader',
    components: { PxIcon }
}
</script>