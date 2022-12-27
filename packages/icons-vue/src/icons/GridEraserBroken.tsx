// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GridEraserBrokenSvg from '@ant-design/icons-svg/lib/asn/GridEraserBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GridEraserBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GridEraserBroken: GridEraserBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GridEraserBrokenSvg}></AntdIcon>;
};

GridEraserBroken.displayName = 'GridEraserBroken';
GridEraserBroken.inheritAttrs = false;
export default GridEraserBroken;