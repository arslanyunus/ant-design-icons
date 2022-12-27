// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GridLockOutlineSvg from '@ant-design/icons-svg/lib/asn/GridLockOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GridLockOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GridLockOutline: GridLockOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GridLockOutlineSvg}></AntdIcon>;
};

GridLockOutline.displayName = 'GridLockOutline';
GridLockOutline.inheritAttrs = false;
export default GridLockOutline;