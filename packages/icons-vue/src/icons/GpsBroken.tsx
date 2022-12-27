// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GpsBrokenSvg from '@ant-design/icons-svg/lib/asn/GpsBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GpsBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GpsBroken: GpsBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GpsBrokenSvg}></AntdIcon>;
};

GpsBroken.displayName = 'GpsBroken';
GpsBroken.inheritAttrs = false;
export default GpsBroken;