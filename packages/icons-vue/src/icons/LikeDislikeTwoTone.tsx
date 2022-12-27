// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LikeDislikeTwoToneSvg from '@ant-design/icons-svg/lib/asn/LikeDislikeTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LikeDislikeTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LikeDislikeTwoTone: LikeDislikeTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LikeDislikeTwoToneSvg}></AntdIcon>;
};

LikeDislikeTwoTone.displayName = 'LikeDislikeTwoTone';
LikeDislikeTwoTone.inheritAttrs = false;
export default LikeDislikeTwoTone;