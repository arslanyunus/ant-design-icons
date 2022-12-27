// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import EmojiNormalLinearSvg from '@ant-design/icons-svg/lib/asn/EmojiNormalLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface EmojiNormalLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const EmojiNormalLinear: EmojiNormalLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EmojiNormalLinearSvg}></AntdIcon>;
};

EmojiNormalLinear.displayName = 'EmojiNormalLinear';
EmojiNormalLinear.inheritAttrs = false;
export default EmojiNormalLinear;