// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GhostBrokenSvg from '@ant-design/icons-svg/lib/asn/GhostBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GhostBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GhostBroken: GhostBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GhostBrokenSvg}></AntdIcon>;
};

GhostBroken.displayName = 'GhostBroken';
GhostBroken.inheritAttrs = false;
export default GhostBroken;