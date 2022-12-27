// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LockCircleBrokenSvg from '@ant-design/icons-svg/lib/asn/LockCircleBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LockCircleBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LockCircleBroken: LockCircleBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LockCircleBrokenSvg}></AntdIcon>;
};

LockCircleBroken.displayName = 'LockCircleBroken';
LockCircleBroken.inheritAttrs = false;
export default LockCircleBroken;