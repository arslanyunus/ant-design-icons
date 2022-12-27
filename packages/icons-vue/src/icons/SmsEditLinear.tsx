// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SmsEditLinearSvg from '@ant-design/icons-svg/lib/asn/SmsEditLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SmsEditLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SmsEditLinear: SmsEditLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SmsEditLinearSvg}></AntdIcon>;
};

SmsEditLinear.displayName = 'SmsEditLinear';
SmsEditLinear.inheritAttrs = false;
export default SmsEditLinear;