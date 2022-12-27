// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import EmojiHappyBoldSvg from '@ant-design/icons-svg/lib/asn/EmojiHappyBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface EmojiHappyBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const EmojiHappyBold: EmojiHappyBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EmojiHappyBoldSvg}></AntdIcon>;
};

EmojiHappyBold.displayName = 'EmojiHappyBold';
EmojiHappyBold.inheritAttrs = false;
export default EmojiHappyBold;