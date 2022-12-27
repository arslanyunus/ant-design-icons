// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SmsStarLinearSvg from '@ant-design/icons-svg/lib/asn/SmsStarLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SmsStarLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SmsStarLinear: SmsStarLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SmsStarLinearSvg}></AntdIcon>;
};

SmsStarLinear.displayName = 'SmsStarLinear';
SmsStarLinear.inheritAttrs = false;
export default SmsStarLinear;