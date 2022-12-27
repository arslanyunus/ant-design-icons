// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import StickerOutlineSvg from '@ant-design/icons-svg/lib/asn/StickerOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface StickerOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const StickerOutline: StickerOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={StickerOutlineSvg}></AntdIcon>;
};

StickerOutline.displayName = 'StickerOutline';
StickerOutline.inheritAttrs = false;
export default StickerOutline;