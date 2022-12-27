// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GridEditBoldSvg from '@ant-design/icons-svg/lib/asn/GridEditBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GridEditBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GridEditBold: GridEditBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GridEditBoldSvg}></AntdIcon>;
};

GridEditBold.displayName = 'GridEditBold';
GridEditBold.inheritAttrs = false;
export default GridEditBold;