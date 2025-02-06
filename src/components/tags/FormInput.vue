<script setup>
defineProps({
    labelName: {
        type: String,
        required: true
    },
    propsId: {
        required: true
    },
    inputType: {
        default: 'text'
    }
});

defineEmits(['update:modelValue']);
</script>

<template>
    <div class="mb-3">
        <label v-bind:for="propsId" class="form-label">{{ labelName }}</label>
        <input
            @input="$emit('update:modelValue', $event.target.value)"
            :id="propsId" v-bind:type="inputType" class="form-control"
        >
    </div>
</template>

<style scoped>

</style>