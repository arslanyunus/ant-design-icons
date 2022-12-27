// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import EmojiHappyBrokenSvg from '@ant-design/icons-svg/lib/asn/EmojiHappyBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface EmojiHappyBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const EmojiHappyBroken: EmojiHappyBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EmojiHappyBrokenSvg}></AntdIcon>;
};

EmojiHappyBroken.displayName = 'EmojiHappyBroken';
EmojiHappyBroken.inheritAttrs = false;
export default EmojiHappyBroken;