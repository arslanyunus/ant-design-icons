// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RadarBoldSvg from '@ant-design/icons-svg/lib/asn/RadarBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RadarBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RadarBold: RadarBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RadarBoldSvg}></AntdIcon>;
};

RadarBold.displayName = 'RadarBold';
RadarBold.inheritAttrs = false;
export default RadarBold;