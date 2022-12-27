// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LikeTagTwoToneSvg from '@ant-design/icons-svg/lib/asn/LikeTagTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LikeTagTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LikeTagTwoTone: LikeTagTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LikeTagTwoToneSvg}></AntdIcon>;
};

LikeTagTwoTone.displayName = 'LikeTagTwoTone';
LikeTagTwoTone.inheritAttrs = false;
export default LikeTagTwoTone;