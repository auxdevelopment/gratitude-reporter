<template>
    <div class="page">
        <div class="report-container">
            <list-entry v-for="report in reports" :key="report.timestamp" :report="report"></list-entry>
        </div>
    </div>
</template>

<script lang="ts">
import ListEntry from '@/components/ListEntry.vue';
import { AppStorage } from '@/storage/app-storage';
import { Report } from '@/storage/report';
import { Component, Vue } from 'vue-property-decorator';

@Component({
    components: {
        ListEntry
    }
})
export default class ReportList extends Vue {
    private reports: Array<Report> = [];

    async created() {
        this.reports = await AppStorage.loadReports();
    }
}
</script>

<style lang="scss" scoped>
.report-container {
    display: flex;
    justify-content: center;
    flex-flow: row-reverse;
    flex-wrap: wrap-reverse;
}

.report-container > * {
    background-color: #fcdab7;
    color: #1d2d50;
    min-width: 300px;
    max-width: 300px;

    min-height: 200px;

    margin: 8px;
}
</style>
