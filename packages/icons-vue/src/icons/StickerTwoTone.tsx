// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import StickerTwoToneSvg from '@ant-design/icons-svg/lib/asn/StickerTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface StickerTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const StickerTwoTone: StickerTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={StickerTwoToneSvg}></AntdIcon>;
};

StickerTwoTone.displayName = 'StickerTwoTone';
StickerTwoTone.inheritAttrs = false;
export default StickerTwoTone;