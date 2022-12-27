// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SmsEditTwoToneSvg from '@ant-design/icons-svg/lib/asn/SmsEditTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SmsEditTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SmsEditTwoTone: SmsEditTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SmsEditTwoToneSvg}></AntdIcon>;
};

SmsEditTwoTone.displayName = 'SmsEditTwoTone';
SmsEditTwoTone.inheritAttrs = false;
export default SmsEditTwoTone;