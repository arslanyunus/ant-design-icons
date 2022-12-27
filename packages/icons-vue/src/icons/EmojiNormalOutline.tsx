// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import EmojiNormalOutlineSvg from '@ant-design/icons-svg/lib/asn/EmojiNormalOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface EmojiNormalOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const EmojiNormalOutline: EmojiNormalOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EmojiNormalOutlineSvg}></AntdIcon>;
};

EmojiNormalOutline.displayName = 'EmojiNormalOutline';
EmojiNormalOutline.inheritAttrs = false;
export default EmojiNormalOutline;