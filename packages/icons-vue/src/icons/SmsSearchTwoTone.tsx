// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SmsSearchTwoToneSvg from '@ant-design/icons-svg/lib/asn/SmsSearchTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SmsSearchTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SmsSearchTwoTone: SmsSearchTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SmsSearchTwoToneSvg}></AntdIcon>;
};

SmsSearchTwoTone.displayName = 'SmsSearchTwoTone';
SmsSearchTwoTone.inheritAttrs = false;
export default SmsSearchTwoTone;