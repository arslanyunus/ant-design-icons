// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GridEditLinearSvg from '@ant-design/icons-svg/lib/asn/GridEditLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GridEditLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GridEditLinear: GridEditLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GridEditLinearSvg}></AntdIcon>;
};

GridEditLinear.displayName = 'GridEditLinear';
GridEditLinear.inheritAttrs = false;
export default GridEditLinear;