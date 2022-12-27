// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HappyemojiTwoToneSvg from '@ant-design/icons-svg/lib/asn/HappyemojiTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HappyemojiTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HappyemojiTwoTone: HappyemojiTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HappyemojiTwoToneSvg}></AntdIcon>;
};

HappyemojiTwoTone.displayName = 'HappyemojiTwoTone';
HappyemojiTwoTone.inheritAttrs = false;
export default HappyemojiTwoTone;