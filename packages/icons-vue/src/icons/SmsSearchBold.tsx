// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SmsSearchBoldSvg from '@ant-design/icons-svg/lib/asn/SmsSearchBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SmsSearchBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SmsSearchBold: SmsSearchBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SmsSearchBoldSvg}></AntdIcon>;
};

SmsSearchBold.displayName = 'SmsSearchBold';
SmsSearchBold.inheritAttrs = false;
export default SmsSearchBold;