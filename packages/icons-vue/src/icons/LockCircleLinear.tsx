// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LockCircleLinearSvg from '@ant-design/icons-svg/lib/asn/LockCircleLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LockCircleLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LockCircleLinear: LockCircleLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LockCircleLinearSvg}></AntdIcon>;
};

LockCircleLinear.displayName = 'LockCircleLinear';
LockCircleLinear.inheritAttrs = false;
export default LockCircleLinear;