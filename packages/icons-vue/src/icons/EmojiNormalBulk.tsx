// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import EmojiNormalBulkSvg from '@ant-design/icons-svg/lib/asn/EmojiNormalBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface EmojiNormalBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const EmojiNormalBulk: EmojiNormalBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EmojiNormalBulkSvg}></AntdIcon>;
};

EmojiNormalBulk.displayName = 'EmojiNormalBulk';
EmojiNormalBulk.inheritAttrs = false;
export default EmojiNormalBulk;