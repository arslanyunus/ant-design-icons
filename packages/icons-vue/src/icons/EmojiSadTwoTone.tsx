// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import EmojiSadTwoToneSvg from '@ant-design/icons-svg/lib/asn/EmojiSadTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface EmojiSadTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const EmojiSadTwoTone: EmojiSadTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EmojiSadTwoToneSvg}></AntdIcon>;
};

EmojiSadTwoTone.displayName = 'EmojiSadTwoTone';
EmojiSadTwoTone.inheritAttrs = false;
export default EmojiSadTwoTone;