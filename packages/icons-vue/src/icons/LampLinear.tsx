// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LampLinearSvg from '@ant-design/icons-svg/lib/asn/LampLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LampLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LampLinear: LampLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LampLinearSvg}></AntdIcon>;
};

LampLinear.displayName = 'LampLinear';
LampLinear.inheritAttrs = false;
export default LampLinear;