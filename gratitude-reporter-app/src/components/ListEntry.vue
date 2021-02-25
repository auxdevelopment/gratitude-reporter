<template>
    <div class="list-entry">
        <p>{{ report.content }}</p>
        <p>{{ report.timestamp }}</p>
    </div>
</template>

<script lang="ts">
import { Report } from '@/storage/report';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ListEntry extends Vue {
    @Prop() report!: Report
}
</script>

<style lang="scss" scoped>
.list-entry {
    border: 2px solid black;
}
</style>