// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GridEraserLinearSvg from '@ant-design/icons-svg/lib/asn/GridEraserLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GridEraserLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GridEraserLinear: GridEraserLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GridEraserLinearSvg}></AntdIcon>;
};

GridEraserLinear.displayName = 'GridEraserLinear';
GridEraserLinear.inheritAttrs = false;
export default GridEraserLinear;