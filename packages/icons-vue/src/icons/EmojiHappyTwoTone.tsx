// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import EmojiHappyTwoToneSvg from '@ant-design/icons-svg/lib/asn/EmojiHappyTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface EmojiHappyTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const EmojiHappyTwoTone: EmojiHappyTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EmojiHappyTwoToneSvg}></AntdIcon>;
};

EmojiHappyTwoTone.displayName = 'EmojiHappyTwoTone';
EmojiHappyTwoTone.inheritAttrs = false;
export default EmojiHappyTwoTone;