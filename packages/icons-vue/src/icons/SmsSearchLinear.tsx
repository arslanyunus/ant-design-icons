// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SmsSearchLinearSvg from '@ant-design/icons-svg/lib/asn/SmsSearchLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SmsSearchLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SmsSearchLinear: SmsSearchLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SmsSearchLinearSvg}></AntdIcon>;
};

SmsSearchLinear.displayName = 'SmsSearchLinear';
SmsSearchLinear.inheritAttrs = false;
export default SmsSearchLinear;