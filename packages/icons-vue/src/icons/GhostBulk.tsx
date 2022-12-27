// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GhostBulkSvg from '@ant-design/icons-svg/lib/asn/GhostBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GhostBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GhostBulk: GhostBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GhostBulkSvg}></AntdIcon>;
};

GhostBulk.displayName = 'GhostBulk';
GhostBulk.inheritAttrs = false;
export default GhostBulk;