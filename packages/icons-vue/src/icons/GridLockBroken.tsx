// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GridLockBrokenSvg from '@ant-design/icons-svg/lib/asn/GridLockBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GridLockBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GridLockBroken: GridLockBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GridLockBrokenSvg}></AntdIcon>;
};

GridLockBroken.displayName = 'GridLockBroken';
GridLockBroken.inheritAttrs = false;
export default GridLockBroken;