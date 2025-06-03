// svg.d.ts
declare module '*.svg' {
  import * as React from 'react';

  const src: string;
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;
  export default src;
}
