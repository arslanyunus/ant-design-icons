// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GhostOutlineSvg from '@ant-design/icons-svg/lib/asn/GhostOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GhostOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GhostOutline: GhostOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GhostOutlineSvg}></AntdIcon>;
};

GhostOutline.displayName = 'GhostOutline';
GhostOutline.inheritAttrs = false;
export default GhostOutline;