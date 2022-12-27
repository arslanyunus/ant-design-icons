// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LockBrokenSvg from '@ant-design/icons-svg/lib/asn/LockBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LockBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LockBroken: LockBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LockBrokenSvg}></AntdIcon>;
};

LockBroken.displayName = 'LockBroken';
LockBroken.inheritAttrs = false;
export default LockBroken;