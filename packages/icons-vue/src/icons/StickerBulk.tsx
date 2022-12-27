// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import StickerBulkSvg from '@ant-design/icons-svg/lib/asn/StickerBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface StickerBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const StickerBulk: StickerBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={StickerBulkSvg}></AntdIcon>;
};

StickerBulk.displayName = 'StickerBulk';
StickerBulk.inheritAttrs = false;
export default StickerBulk;