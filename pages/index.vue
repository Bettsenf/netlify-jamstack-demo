<template>
  <!-- <div class="container"> -->
  <div id="tube-map"></div>
  <!-- </div> -->
</template>

<script lang="ts">
import Vue from 'vue';
import { select, zoom, event } from 'd3';
import { tubeMap } from 'd3-tube-map';
import data from './stations.json';

export default Vue.extend({
  mounted() {
    const container = select<HTMLDivElement, any>('#tube-map');
    const { offsetWidth, offsetHeight } = container.node()!;

    const map = tubeMap()
      .width(offsetWidth)
      .height(offsetHeight)
      .on('click', (name: string) => {
        // eslint-disable-next-line no-console
        console.log(name);
      });

    container.datum(data).call(map);

    const svg = container.select<Element>('svg');
    const execZoom = zoom().scaleExtent([0.5, 4]).on('zoom', zoomed);

    const zoomContainer = svg.call(execZoom);
    const initialScale = 1;

    execZoom.scaleTo(zoomContainer, initialScale);

    function zoomed() {
      svg.select('g').attr('transform', event.transform.toString());
    }
  },
});
</script>

<style lang="scss" scoped>
#tube-map {
  height: 100%;
}
// .container {
//   margin: 0 auto;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   text-align: center;
//   flex-direction: column;
//   flex: 1;
// }
</style>
