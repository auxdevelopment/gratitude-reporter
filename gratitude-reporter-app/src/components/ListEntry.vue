<template>
    <div class="list-entry">
        <div class="metadata">{{ getFormatted() }}</div>
        <div class="content">{{ report.content }}</div>
    </div>
</template>

<script lang="ts">
import { Report } from '@/storage/report';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ListEntry extends Vue {
    @Prop() report!: Report

    getFormatted() {
        const date = new Date(this.report.timestamp);

        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();

        return `${day}.${month}.${year}`;
    }
}
</script>

<style lang="scss" scoped>
.list-entry {
    border: 2px solid rgb(255, 255, 255);

    padding: 18px;
    padding-top: 12px;
}

.content {
    font-size: 24px;
    text-align: left;

    margin-top: 8px;
}

.metadata {
    text-align: left;

    font-size: 24px;
    font-weight: bold;
    text-decoration: underline;
}
</style>
