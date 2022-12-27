// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import EmojiHappyLinearSvg from '@ant-design/icons-svg/lib/asn/EmojiHappyLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface EmojiHappyLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const EmojiHappyLinear: EmojiHappyLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EmojiHappyLinearSvg}></AntdIcon>;
};

EmojiHappyLinear.displayName = 'EmojiHappyLinear';
EmojiHappyLinear.inheritAttrs = false;
export default EmojiHappyLinear;