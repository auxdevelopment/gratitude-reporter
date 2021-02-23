<template>
  <div class="home">
    <text-field :content="'test'"></text-field>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TextField from '@/components/TextField.vue';
import { AppStorage } from '@/storage/app-storage';

@Component({
  components: {
    TextField
  }
})
export default class Home extends Vue {
  data() {
    return {
      alreadyReported: Boolean
    };
  }

  async mounted() {
    console.log('Mounted!');

    const reports = await AppStorage.loadReports();
  }
}
</script>
