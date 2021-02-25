<template>
    <div>
      <list-entry v-for="report in reports" :key="report.timestamp" :report="report"></list-entry>
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
