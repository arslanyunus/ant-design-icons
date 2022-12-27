// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LikeDislikeLinearSvg from '@ant-design/icons-svg/lib/asn/LikeDislikeLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LikeDislikeLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LikeDislikeLinear: LikeDislikeLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LikeDislikeLinearSvg}></AntdIcon>;
};

LikeDislikeLinear.displayName = 'LikeDislikeLinear';
LikeDislikeLinear.inheritAttrs = false;
export default LikeDislikeLinear;