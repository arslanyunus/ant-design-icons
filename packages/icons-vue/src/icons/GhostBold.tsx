// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GhostBoldSvg from '@ant-design/icons-svg/lib/asn/GhostBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GhostBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GhostBold: GhostBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GhostBoldSvg}></AntdIcon>;
};

GhostBold.displayName = 'GhostBold';
GhostBold.inheritAttrs = false;
export default GhostBold;