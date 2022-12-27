// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RadarLinearSvg from '@ant-design/icons-svg/lib/asn/RadarLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RadarLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RadarLinear: RadarLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RadarLinearSvg}></AntdIcon>;
};

RadarLinear.displayName = 'RadarLinear';
RadarLinear.inheritAttrs = false;
export default RadarLinear;