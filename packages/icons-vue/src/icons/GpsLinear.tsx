// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GpsLinearSvg from '@ant-design/icons-svg/lib/asn/GpsLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GpsLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GpsLinear: GpsLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GpsLinearSvg}></AntdIcon>;
};

GpsLinear.displayName = 'GpsLinear';
GpsLinear.inheritAttrs = false;
export default GpsLinear;