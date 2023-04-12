<script setup lang="ts">
import maska from 'maska';

interface IProps {
    text: string,
}

const props = withDefaults(defineProps<IProps>(), {
    text: 'This is button'
})


console.log(maska)

</script>
<template>
    <button class="px-4 py-2 bg-orange-500 rounded text-white font-semibold">{{ text }}</button>
</template>
