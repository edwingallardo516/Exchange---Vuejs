<template>
    <button
    @click="buttonclick"
        class="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-2 border border-green-500 hover:border-transparent rounded"
    >
        <div class="flex justify-center">
            <beat-loader :loading="isLoading" :color="'#68d391'" :size="10"/>
        </div>
        <p v-show="!isLoading">
            <slot ></slot>
        </p>
    </button>
</template>

<script>
export default {
    name: 'PxButton',

    props: {
        isLoading: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        buttonclick(){
            this.$emit('click')
        }
    }
}
</script>