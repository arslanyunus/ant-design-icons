// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LikeShapesOutlineSvg from '@ant-design/icons-svg/lib/asn/LikeShapesOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LikeShapesOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LikeShapesOutline: LikeShapesOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LikeShapesOutlineSvg}></AntdIcon>;
};

LikeShapesOutline.displayName = 'LikeShapesOutline';
LikeShapesOutline.inheritAttrs = false;
export default LikeShapesOutline;