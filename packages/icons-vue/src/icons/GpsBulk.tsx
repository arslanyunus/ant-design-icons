// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GpsBulkSvg from '@ant-design/icons-svg/lib/asn/GpsBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GpsBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GpsBulk: GpsBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GpsBulkSvg}></AntdIcon>;
};

GpsBulk.displayName = 'GpsBulk';
GpsBulk.inheritAttrs = false;
export default GpsBulk;