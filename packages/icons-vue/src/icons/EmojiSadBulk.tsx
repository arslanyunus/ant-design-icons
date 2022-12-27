// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import EmojiSadBulkSvg from '@ant-design/icons-svg/lib/asn/EmojiSadBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface EmojiSadBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const EmojiSadBulk: EmojiSadBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EmojiSadBulkSvg}></AntdIcon>;
};

EmojiSadBulk.displayName = 'EmojiSadBulk';
EmojiSadBulk.inheritAttrs = false;
export default EmojiSadBulk;