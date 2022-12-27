// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import EmojiNormalBrokenSvg from '@ant-design/icons-svg/lib/asn/EmojiNormalBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface EmojiNormalBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const EmojiNormalBroken: EmojiNormalBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EmojiNormalBrokenSvg}></AntdIcon>;
};

EmojiNormalBroken.displayName = 'EmojiNormalBroken';
EmojiNormalBroken.inheritAttrs = false;
export default EmojiNormalBroken;