// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LikeShapesBulkSvg from '@ant-design/icons-svg/lib/asn/LikeShapesBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LikeShapesBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LikeShapesBulk: LikeShapesBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LikeShapesBulkSvg}></AntdIcon>;
};

LikeShapesBulk.displayName = 'LikeShapesBulk';
LikeShapesBulk.inheritAttrs = false;
export default LikeShapesBulk;