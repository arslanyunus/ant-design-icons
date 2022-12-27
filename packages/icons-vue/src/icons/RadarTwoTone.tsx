// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RadarTwoToneSvg from '@ant-design/icons-svg/lib/asn/RadarTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RadarTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RadarTwoTone: RadarTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RadarTwoToneSvg}></AntdIcon>;
};

RadarTwoTone.displayName = 'RadarTwoTone';
RadarTwoTone.inheritAttrs = false;
export default RadarTwoTone;