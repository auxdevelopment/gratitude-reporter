<template>
    <div>
        <div>
            <input v-bind:value="content" v-on:input="$emit('update:content', $event.target.value)">
        </div>
        <button v-on:click="submit()">{{ buttonText }}</button>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ReportEditor extends Vue {
    @Prop() content!: string;
    @Prop() submit!: Function;
    @Prop() buttonText!: string;
}
</script>
