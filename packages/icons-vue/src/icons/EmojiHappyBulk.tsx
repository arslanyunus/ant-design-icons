// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import EmojiHappyBulkSvg from '@ant-design/icons-svg/lib/asn/EmojiHappyBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface EmojiHappyBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const EmojiHappyBulk: EmojiHappyBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EmojiHappyBulkSvg}></AntdIcon>;
};

EmojiHappyBulk.displayName = 'EmojiHappyBulk';
EmojiHappyBulk.inheritAttrs = false;
export default EmojiHappyBulk;