// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FlashCircle1TwoToneSvg from '@ant-design/icons-svg/lib/asn/FlashCircle1TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FlashCircle1TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FlashCircle1TwoTone: FlashCircle1TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FlashCircle1TwoToneSvg}></AntdIcon>;
};

FlashCircle1TwoTone.displayName = 'FlashCircle1TwoTone';
FlashCircle1TwoTone.inheritAttrs = false;
export default FlashCircle1TwoTone;