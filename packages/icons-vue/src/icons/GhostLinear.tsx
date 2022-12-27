// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GhostLinearSvg from '@ant-design/icons-svg/lib/asn/GhostLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GhostLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GhostLinear: GhostLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GhostLinearSvg}></AntdIcon>;
};

GhostLinear.displayName = 'GhostLinear';
GhostLinear.inheritAttrs = false;
export default GhostLinear;