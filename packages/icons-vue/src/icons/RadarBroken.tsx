// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RadarBrokenSvg from '@ant-design/icons-svg/lib/asn/RadarBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RadarBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RadarBroken: RadarBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RadarBrokenSvg}></AntdIcon>;
};

RadarBroken.displayName = 'RadarBroken';
RadarBroken.inheritAttrs = false;
export default RadarBroken;