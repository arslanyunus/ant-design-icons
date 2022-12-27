// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import EmojiSadLinearSvg from '@ant-design/icons-svg/lib/asn/EmojiSadLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface EmojiSadLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const EmojiSadLinear: EmojiSadLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EmojiSadLinearSvg}></AntdIcon>;
};

EmojiSadLinear.displayName = 'EmojiSadLinear';
EmojiSadLinear.inheritAttrs = false;
export default EmojiSadLinear;