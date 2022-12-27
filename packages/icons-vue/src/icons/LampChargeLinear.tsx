// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LampChargeLinearSvg from '@ant-design/icons-svg/lib/asn/LampChargeLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LampChargeLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LampChargeLinear: LampChargeLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LampChargeLinearSvg}></AntdIcon>;
};

LampChargeLinear.displayName = 'LampChargeLinear';
LampChargeLinear.inheritAttrs = false;
export default LampChargeLinear;