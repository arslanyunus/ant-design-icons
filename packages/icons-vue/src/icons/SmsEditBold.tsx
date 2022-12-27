// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SmsEditBoldSvg from '@ant-design/icons-svg/lib/asn/SmsEditBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SmsEditBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SmsEditBold: SmsEditBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SmsEditBoldSvg}></AntdIcon>;
};

SmsEditBold.displayName = 'SmsEditBold';
SmsEditBold.inheritAttrs = false;
export default SmsEditBold;