// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import EmojiHappyOutlineSvg from '@ant-design/icons-svg/lib/asn/EmojiHappyOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface EmojiHappyOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const EmojiHappyOutline: EmojiHappyOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EmojiHappyOutlineSvg}></AntdIcon>;
};

EmojiHappyOutline.displayName = 'EmojiHappyOutline';
EmojiHappyOutline.inheritAttrs = false;
export default EmojiHappyOutline;