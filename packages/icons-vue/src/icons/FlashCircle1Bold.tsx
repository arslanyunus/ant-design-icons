// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FlashCircle1BoldSvg from '@ant-design/icons-svg/lib/asn/FlashCircle1Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FlashCircle1BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FlashCircle1Bold: FlashCircle1BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FlashCircle1BoldSvg}></AntdIcon>;
};

FlashCircle1Bold.displayName = 'FlashCircle1Bold';
FlashCircle1Bold.inheritAttrs = false;
export default FlashCircle1Bold;