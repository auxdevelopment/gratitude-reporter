<template>
    <div>
        <textarea name="" id="" cols="30" rows="10" v-model="content"></textarea>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class TextField extends Vue {
    @Prop() content!: string;
}

</script>