// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LikeShapesTwoToneSvg from '@ant-design/icons-svg/lib/asn/LikeShapesTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LikeShapesTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LikeShapesTwoTone: LikeShapesTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LikeShapesTwoToneSvg}></AntdIcon>;
};

LikeShapesTwoTone.displayName = 'LikeShapesTwoTone';
LikeShapesTwoTone.inheritAttrs = false;
export default LikeShapesTwoTone;