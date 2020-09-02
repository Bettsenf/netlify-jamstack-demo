<template>
  <div class="container">
    <svg :style="{ height: lines.length * offset.y }">
      <g v-for="(line, i) in lines" :key="line.name + i">
        <g v-for="(station, j) in line.stations" :key="station.name + j">
          <circle :cx="offset.x * j + size" :cy="offset.y * i + size" :r="8 * (size / 10)" :fill="line.color" />
          <text :x="offset.x * j + size / 2" :y="offset.y * i + 3 * size + 5" :font-size="size" :fill="line.color">
            {{ station.name }}
          </text>
          <line
            v-if="j < line.stations.length - 1"
            :x1="offset.x * j + size"
            :y1="offset.y * i + size"
            :x2="offset.x * j + offset.x + size"
            :y2="offset.y * i + size"
            :stroke="line.color"
            :stroke-width="size / 2"
          />
        </g>
      </g>
    </svg>
    <!-- <div id="tube-map"></div> -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import isColor from 'is-color';

// TODO: Github Account, Netflify Account

export interface Station {
  name: string;
}

export interface Line {
  name: string;
  color?: string;
  stations: Station[];
}

export interface AppConfig {
  size: number;
}

export const DEFAULT_LINE_COLOR = '#91c2f3';

export default Vue.extend({
  async asyncData({ $content }: any) {
    const data: Line[] = await $content('line').fetch();
    const appConfig: AppConfig = await $content('config').fetch();

    const lines = data.map(line => ({
      ...line,
      color: line.color && isColor(line.color) ? line.color : DEFAULT_LINE_COLOR,
    }));
    console.log(JSON.stringify(lines));

    const { size } = appConfig;

    return {
      lines,
      offset: { x: 2 * size, y: size },
      size: size / 5,
    };
  },

  methods: {
    color(cssColor: string) {
      return cssColor && isColor(cssColor) ? cssColor : '#91c2f3';
    },
  },
});
</script>

<style lang="scss" scoped>
// #tube-map,
.container {
  display: flex;
  flex-direction: column;
  flex: 1;
}
pre {
  font-size: 0.5rem;
}

svg {
  width: 100%;
  max-width: 1024px;
  margin: auto;
}
</style>
