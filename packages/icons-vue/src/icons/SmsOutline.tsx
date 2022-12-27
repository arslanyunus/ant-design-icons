// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SmsOutlineSvg from '@ant-design/icons-svg/lib/asn/SmsOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SmsOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SmsOutline: SmsOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SmsOutlineSvg}></AntdIcon>;
};

SmsOutline.displayName = 'SmsOutline';
SmsOutline.inheritAttrs = false;
export default SmsOutline;