// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SmsStarTwoToneSvg from '@ant-design/icons-svg/lib/asn/SmsStarTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SmsStarTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SmsStarTwoTone: SmsStarTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SmsStarTwoToneSvg}></AntdIcon>;
};

SmsStarTwoTone.displayName = 'SmsStarTwoTone';
SmsStarTwoTone.inheritAttrs = false;
export default SmsStarTwoTone;