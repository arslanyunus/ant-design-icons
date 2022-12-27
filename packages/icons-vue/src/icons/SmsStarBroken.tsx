// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SmsStarBrokenSvg from '@ant-design/icons-svg/lib/asn/SmsStarBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SmsStarBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SmsStarBroken: SmsStarBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SmsStarBrokenSvg}></AntdIcon>;
};

SmsStarBroken.displayName = 'SmsStarBroken';
SmsStarBroken.inheritAttrs = false;
export default SmsStarBroken;