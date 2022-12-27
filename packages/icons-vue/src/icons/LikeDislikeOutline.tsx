// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LikeDislikeOutlineSvg from '@ant-design/icons-svg/lib/asn/LikeDislikeOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LikeDislikeOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LikeDislikeOutline: LikeDislikeOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LikeDislikeOutlineSvg}></AntdIcon>;
};

LikeDislikeOutline.displayName = 'LikeDislikeOutline';
LikeDislikeOutline.inheritAttrs = false;
export default LikeDislikeOutline;