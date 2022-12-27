// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LikeShapesBoldSvg from '@ant-design/icons-svg/lib/asn/LikeShapesBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LikeShapesBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LikeShapesBold: LikeShapesBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LikeShapesBoldSvg}></AntdIcon>;
};

LikeShapesBold.displayName = 'LikeShapesBold';
LikeShapesBold.inheritAttrs = false;
export default LikeShapesBold;