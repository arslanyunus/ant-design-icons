// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FlashCircleBoldSvg from '@ant-design/icons-svg/lib/asn/FlashCircleBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FlashCircleBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FlashCircleBold: FlashCircleBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FlashCircleBoldSvg}></AntdIcon>;
};

FlashCircleBold.displayName = 'FlashCircleBold';
FlashCircleBold.inheritAttrs = false;
export default FlashCircleBold;