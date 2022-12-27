// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FlashCircle2LinearSvg from '@ant-design/icons-svg/lib/asn/FlashCircle2Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FlashCircle2LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FlashCircle2Linear: FlashCircle2LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FlashCircle2LinearSvg}></AntdIcon>;
};

FlashCircle2Linear.displayName = 'FlashCircle2Linear';
FlashCircle2Linear.inheritAttrs = false;
export default FlashCircle2Linear;