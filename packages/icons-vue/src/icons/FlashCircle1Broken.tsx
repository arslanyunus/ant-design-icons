// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FlashCircle1BrokenSvg from '@ant-design/icons-svg/lib/asn/FlashCircle1Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FlashCircle1BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FlashCircle1Broken: FlashCircle1BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FlashCircle1BrokenSvg}></AntdIcon>;
};

FlashCircle1Broken.displayName = 'FlashCircle1Broken';
FlashCircle1Broken.inheritAttrs = false;
export default FlashCircle1Broken;