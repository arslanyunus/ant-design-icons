// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GridEraserBoldSvg from '@ant-design/icons-svg/lib/asn/GridEraserBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GridEraserBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GridEraserBold: GridEraserBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GridEraserBoldSvg}></AntdIcon>;
};

GridEraserBold.displayName = 'GridEraserBold';
GridEraserBold.inheritAttrs = false;
export default GridEraserBold;