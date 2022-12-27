// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import EmojiSadBrokenSvg from '@ant-design/icons-svg/lib/asn/EmojiSadBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface EmojiSadBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const EmojiSadBroken: EmojiSadBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EmojiSadBrokenSvg}></AntdIcon>;
};

EmojiSadBroken.displayName = 'EmojiSadBroken';
EmojiSadBroken.inheritAttrs = false;
export default EmojiSadBroken;