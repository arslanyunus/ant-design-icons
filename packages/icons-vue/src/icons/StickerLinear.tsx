// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import StickerLinearSvg from '@ant-design/icons-svg/lib/asn/StickerLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface StickerLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const StickerLinear: StickerLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={StickerLinearSvg}></AntdIcon>;
};

StickerLinear.displayName = 'StickerLinear';
StickerLinear.inheritAttrs = false;
export default StickerLinear;