// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LockCircleBoldSvg from '@ant-design/icons-svg/lib/asn/LockCircleBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LockCircleBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LockCircleBold: LockCircleBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LockCircleBoldSvg}></AntdIcon>;
};

LockCircleBold.displayName = 'LockCircleBold';
LockCircleBold.inheritAttrs = false;
export default LockCircleBold;