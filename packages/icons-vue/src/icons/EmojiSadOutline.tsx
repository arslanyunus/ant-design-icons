// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import EmojiSadOutlineSvg from '@ant-design/icons-svg/lib/asn/EmojiSadOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface EmojiSadOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const EmojiSadOutline: EmojiSadOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EmojiSadOutlineSvg}></AntdIcon>;
};

EmojiSadOutline.displayName = 'EmojiSadOutline';
EmojiSadOutline.inheritAttrs = false;
export default EmojiSadOutline;