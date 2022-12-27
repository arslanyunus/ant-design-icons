// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import StickerBrokenSvg from '@ant-design/icons-svg/lib/asn/StickerBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface StickerBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const StickerBroken: StickerBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={StickerBrokenSvg}></AntdIcon>;
};

StickerBroken.displayName = 'StickerBroken';
StickerBroken.inheritAttrs = false;
export default StickerBroken;