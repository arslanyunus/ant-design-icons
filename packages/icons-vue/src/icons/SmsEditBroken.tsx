// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SmsEditBrokenSvg from '@ant-design/icons-svg/lib/asn/SmsEditBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SmsEditBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SmsEditBroken: SmsEditBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SmsEditBrokenSvg}></AntdIcon>;
};

SmsEditBroken.displayName = 'SmsEditBroken';
SmsEditBroken.inheritAttrs = false;
export default SmsEditBroken;