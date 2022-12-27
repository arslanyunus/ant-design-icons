// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GridLockTwoToneSvg from '@ant-design/icons-svg/lib/asn/GridLockTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GridLockTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GridLockTwoTone: GridLockTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GridLockTwoToneSvg}></AntdIcon>;
};

GridLockTwoTone.displayName = 'GridLockTwoTone';
GridLockTwoTone.inheritAttrs = false;
export default GridLockTwoTone;