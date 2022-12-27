// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GpsBoldSvg from '@ant-design/icons-svg/lib/asn/GpsBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GpsBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GpsBold: GpsBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GpsBoldSvg}></AntdIcon>;
};

GpsBold.displayName = 'GpsBold';
GpsBold.inheritAttrs = false;
export default GpsBold;