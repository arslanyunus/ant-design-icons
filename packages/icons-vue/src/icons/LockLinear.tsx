// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LockLinearSvg from '@ant-design/icons-svg/lib/asn/LockLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LockLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LockLinear: LockLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LockLinearSvg}></AntdIcon>;
};

LockLinear.displayName = 'LockLinear';
LockLinear.inheritAttrs = false;
export default LockLinear;