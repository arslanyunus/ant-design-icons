// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GlassBulkSvg from '@ant-design/icons-svg/lib/asn/GlassBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GlassBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GlassBulk: GlassBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GlassBulkSvg}></AntdIcon>;
};

GlassBulk.displayName = 'GlassBulk';
GlassBulk.inheritAttrs = false;
export default GlassBulk;