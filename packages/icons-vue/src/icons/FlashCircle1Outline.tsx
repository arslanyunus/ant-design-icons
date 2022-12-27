// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FlashCircle1OutlineSvg from '@ant-design/icons-svg/lib/asn/FlashCircle1Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FlashCircle1OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FlashCircle1Outline: FlashCircle1OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FlashCircle1OutlineSvg}></AntdIcon>;
};

FlashCircle1Outline.displayName = 'FlashCircle1Outline';
FlashCircle1Outline.inheritAttrs = false;
export default FlashCircle1Outline;