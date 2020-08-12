<template>
  <div class="container">
    <ReportContainer class="report-container">
      <template #description>Lorim ipsum dolor sit amet.</template>
      <template #metrics><Metrics></Metrics></template>
    </ReportContainer>

    <ReportContainer class="report-container">
      <template #description>desc 2</template>
      <template #metrics><Metrics></Metrics></template>
    </ReportContainer>

    <ReportContainer class="report-container">
      <template #metrics><MetricsPersonal></MetricsPersonal></template>
    </ReportContainer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
}

.report-container {
  margin: 1rem 0;
}
</style>
