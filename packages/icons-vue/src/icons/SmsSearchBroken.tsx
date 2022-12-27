// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SmsSearchBrokenSvg from '@ant-design/icons-svg/lib/asn/SmsSearchBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SmsSearchBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SmsSearchBroken: SmsSearchBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SmsSearchBrokenSvg}></AntdIcon>;
};

SmsSearchBroken.displayName = 'SmsSearchBroken';
SmsSearchBroken.inheritAttrs = false;
export default SmsSearchBroken;