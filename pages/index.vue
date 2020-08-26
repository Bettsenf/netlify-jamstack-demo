<template>
  <div id="tube-map"></div>
</template>

<script lang="ts">
import Vue from 'vue';
import { select, zoom, event } from 'd3';
import { tubeMap } from 'd3-tube-map';

// TODO: d3 SSR
// TODO: Color
// TODO: Header/Footer
// TODO: Github Account, Netflify Account

function generate(data: any) {
  const stations = data.reduce(
    (lineAcc: any, line: any) => ({
      ...lineAcc,
      stations: {
        ...lineAcc.stations,
        ...line.stations.reduce(
          (stationAcc: any, station: any) => ({ ...stationAcc, [station.name]: { label: station.name } }),
          {}
        ),
      },
    }),
    {}
  );
  const lines = data.map((line: any, i: number) => ({
    name: line.name,
    shiftCoords: [0, i * 5],
    color: '#c1f390',
    nodes: line.stations.map((station: any, j: number) => ({ coords: [j * 20, 0], name: station.name, labelPos: 'S' })),
  }));

  return {
    stations: stations.stations,
    lines,
  };
}

export default Vue.extend({
  async asyncData({ $content }: any) {
    const lines = await $content('line').fetch();
    // eslint-disable-next-line no-console
    console.log(JSON.stringify(lines));

    return {
      lines,
    };
  },

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

    const data = generate((this as any).lines);
    console.log(data);
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
