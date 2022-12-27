// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FlashCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/FlashCircleTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FlashCircleTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FlashCircleTwoTone: FlashCircleTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FlashCircleTwoToneSvg}></AntdIcon>;
};

FlashCircleTwoTone.displayName = 'FlashCircleTwoTone';
FlashCircleTwoTone.inheritAttrs = false;
export default FlashCircleTwoTone;