// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FlashCircle1LinearSvg from '@ant-design/icons-svg/lib/asn/FlashCircle1Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FlashCircle1LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FlashCircle1Linear: FlashCircle1LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FlashCircle1LinearSvg}></AntdIcon>;
};

FlashCircle1Linear.displayName = 'FlashCircle1Linear';
FlashCircle1Linear.inheritAttrs = false;
export default FlashCircle1Linear;