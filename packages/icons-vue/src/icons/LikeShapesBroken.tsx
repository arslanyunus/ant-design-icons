// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LikeShapesBrokenSvg from '@ant-design/icons-svg/lib/asn/LikeShapesBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LikeShapesBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LikeShapesBroken: LikeShapesBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LikeShapesBrokenSvg}></AntdIcon>;
};

LikeShapesBroken.displayName = 'LikeShapesBroken';
LikeShapesBroken.inheritAttrs = false;
export default LikeShapesBroken;