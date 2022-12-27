// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GridLockLinearSvg from '@ant-design/icons-svg/lib/asn/GridLockLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GridLockLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GridLockLinear: GridLockLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GridLockLinearSvg}></AntdIcon>;
};

GridLockLinear.displayName = 'GridLockLinear';
GridLockLinear.inheritAttrs = false;
export default GridLockLinear;