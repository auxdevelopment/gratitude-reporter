<template>
  <div class="home page">
    <div class="sub-header">Es gibt vieles in unserem Leben, wofür wir dankbar sein können. Dankbarkeit kann sich auf alles Mögliche beziehen - Erlebnisse, Objekte, Personen, etc. Deinen Gedanken sind keine Grenzen gesetzt! Erinnere dich an den vergangenen Tag und notiere dir, wofür du heute dankbar bist.</div>

    <report-editor
      :buttonText="'Report eingeben'"
      v-bind:content.sync="content"
      :submit="submit"></report-editor>

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
  private content = '';

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
  }

  async submit() {
    const timestamp = Date.now();
    const report: Report = {
      content: this.content,
      timestamp: timestamp
    };

    await AppStorage.addReport(report);
    this.content = '';
  }

}
</script>
