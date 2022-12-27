// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GridLockBoldSvg from '@ant-design/icons-svg/lib/asn/GridLockBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GridLockBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GridLockBold: GridLockBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GridLockBoldSvg}></AntdIcon>;
};

GridLockBold.displayName = 'GridLockBold';
GridLockBold.inheritAttrs = false;
export default GridLockBold;