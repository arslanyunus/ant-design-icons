// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import EmojiNormalBoldSvg from '@ant-design/icons-svg/lib/asn/EmojiNormalBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface EmojiNormalBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const EmojiNormalBold: EmojiNormalBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EmojiNormalBoldSvg}></AntdIcon>;
};

EmojiNormalBold.displayName = 'EmojiNormalBold';
EmojiNormalBold.inheritAttrs = false;
export default EmojiNormalBold;