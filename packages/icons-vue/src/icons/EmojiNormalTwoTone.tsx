// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import EmojiNormalTwoToneSvg from '@ant-design/icons-svg/lib/asn/EmojiNormalTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface EmojiNormalTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const EmojiNormalTwoTone: EmojiNormalTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EmojiNormalTwoToneSvg}></AntdIcon>;
};

EmojiNormalTwoTone.displayName = 'EmojiNormalTwoTone';
EmojiNormalTwoTone.inheritAttrs = false;
export default EmojiNormalTwoTone;