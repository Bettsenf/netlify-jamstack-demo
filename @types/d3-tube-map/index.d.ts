declare module 'd3-tube-map' {
  import { Selection, Dispatch } from 'd3';

  interface Margin {
    top: number;
    right: number;
    bottom: number;
    left: number;
  }

  function tubeMap(): TubeMap;

  interface TubeMap extends Dispatch<TubeMap> {
    (selection: any, ...args: any[]): TubeMap;

    width(): number;
    width(value: number): TubeMap;

    height(): number;
    height(value: number): TubeMap;

    margin(): Margin;
    margin(value: Margin): TubeMap;

    // on(): ;
    // on(eventName: string, callback: Dispatch<{}>): TubeMap;
  }
}
