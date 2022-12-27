// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SmsStarBoldSvg from '@ant-design/icons-svg/lib/asn/SmsStarBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SmsStarBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SmsStarBold: SmsStarBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SmsStarBoldSvg}></AntdIcon>;
};

SmsStarBold.displayName = 'SmsStarBold';
SmsStarBold.inheritAttrs = false;
export default SmsStarBold;