// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import StickerBoldSvg from '@ant-design/icons-svg/lib/asn/StickerBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface StickerBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const StickerBold: StickerBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={StickerBoldSvg}></AntdIcon>;
};

StickerBold.displayName = 'StickerBold';
StickerBold.inheritAttrs = false;
export default StickerBold;