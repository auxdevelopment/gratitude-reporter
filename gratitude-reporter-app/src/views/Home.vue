<template>
  <div class="home">
    <report-editor
      v-if="!alreadyReported"
      :buttonText="'Report eingeben'"
      v-bind:content.sync="content"
      :submit="submit"></report-editor>
    <already-reported v-else></already-reported>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ReportEditor from '@/components/ReportEditor.vue';
import AlreadyReported from '@/components/AlreadyReported.vue';
import { AppStorage } from '@/storage/app-storage';
import { Report } from '@/storage/report';

@Component({
  components: {
    ReportEditor, AlreadyReported
  },
})
export default class Home extends Vue {
  private alreadyReported = false;
  private content = 'Ein Report';

  async created() {
    const reports = await AppStorage.loadReports();

    const reportFromToday = reports.find(report => {
      const timestamp = new Date(report.timestamp);
      const today = new Date(Date.now());
      const reportedToday = timestamp.getFullYear() === today.getFullYear()
        && timestamp.getMonth() === today.getMonth()
        && timestamp.getDate() === today.getDate();

      return reportedToday;
    });

    this.alreadyReported = !!reportFromToday;
  }

  async submit() {
    const timestamp = Date.now();
    const report: Report = {
      content: this.content,
      timestamp: timestamp
    };

    await AppStorage.addReport(report);
    this.alreadyReported = true;
  }

}
</script>
