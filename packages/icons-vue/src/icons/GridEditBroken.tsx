// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GridEditBrokenSvg from '@ant-design/icons-svg/lib/asn/GridEditBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GridEditBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GridEditBroken: GridEditBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GridEditBrokenSvg}></AntdIcon>;
};

GridEditBroken.displayName = 'GridEditBroken';
GridEditBroken.inheritAttrs = false;
export default GridEditBroken;