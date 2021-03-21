<template>
    <div class="page">
        <div class="sub-header">
            Hier kannst du deine Einträge zum Abschluss der Studie exportieren.
            Dabei werden selbstverständlich nur Metadaten (also Anzahl und Zeitpunkt) der Einträge exportiert.
            Die eigentlichen Inhalte bleiben privat.
        </div>

        <button @click="sendMail()">Einträge exportieren</button>
    </div>
</template>

<script lang="ts">
import { Exporter } from '@/export/exporter';
import { AppStorage } from '@/storage/app-storage';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class Export extends Vue {
    async sendMail() {
        const reports = await AppStorage.loadReports();
        const participantId = await AppStorage.getParticipantId();

        // TODO: add correct receipient
        const receipient = '';
        const mailBody = Exporter.generateExport(participantId, reports)
        const encoded = encodeURIComponent(mailBody);
        window.location.href = `mailto:${receipient}?body=${encoded}`;
    }
}

</script>

<style lang="scss" scoped>
button {
    margin-top: 10vh;
}
</style>