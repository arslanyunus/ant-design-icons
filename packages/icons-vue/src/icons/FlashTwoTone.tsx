// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FlashTwoToneSvg from '@ant-design/icons-svg/lib/asn/FlashTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FlashTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FlashTwoTone: FlashTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FlashTwoToneSvg}></AntdIcon>;
};

FlashTwoTone.displayName = 'FlashTwoTone';
FlashTwoTone.inheritAttrs = false;
export default FlashTwoTone;