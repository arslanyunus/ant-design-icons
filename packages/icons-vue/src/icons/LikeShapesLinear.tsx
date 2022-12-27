// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LikeShapesLinearSvg from '@ant-design/icons-svg/lib/asn/LikeShapesLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LikeShapesLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LikeShapesLinear: LikeShapesLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LikeShapesLinearSvg}></AntdIcon>;
};

LikeShapesLinear.displayName = 'LikeShapesLinear';
LikeShapesLinear.inheritAttrs = false;
export default LikeShapesLinear;