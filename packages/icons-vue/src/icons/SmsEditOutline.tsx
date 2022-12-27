// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SmsEditOutlineSvg from '@ant-design/icons-svg/lib/asn/SmsEditOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SmsEditOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SmsEditOutline: SmsEditOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SmsEditOutlineSvg}></AntdIcon>;
};

SmsEditOutline.displayName = 'SmsEditOutline';
SmsEditOutline.inheritAttrs = false;
export default SmsEditOutline;