// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GridEditOutlineSvg from '@ant-design/icons-svg/lib/asn/GridEditOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GridEditOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GridEditOutline: GridEditOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GridEditOutlineSvg}></AntdIcon>;
};

GridEditOutline.displayName = 'GridEditOutline';
GridEditOutline.inheritAttrs = false;
export default GridEditOutline;