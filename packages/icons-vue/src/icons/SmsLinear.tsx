// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SmsLinearSvg from '@ant-design/icons-svg/lib/asn/SmsLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SmsLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SmsLinear: SmsLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SmsLinearSvg}></AntdIcon>;
};

SmsLinear.displayName = 'SmsLinear';
SmsLinear.inheritAttrs = false;
export default SmsLinear;