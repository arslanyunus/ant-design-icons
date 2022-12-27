// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import EmojiSadBoldSvg from '@ant-design/icons-svg/lib/asn/EmojiSadBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface EmojiSadBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const EmojiSadBold: EmojiSadBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EmojiSadBoldSvg}></AntdIcon>;
};

EmojiSadBold.displayName = 'EmojiSadBold';
EmojiSadBold.inheritAttrs = false;
export default EmojiSadBold;