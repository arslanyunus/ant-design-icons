// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RadarOutlineSvg from '@ant-design/icons-svg/lib/asn/RadarOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RadarOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RadarOutline: RadarOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RadarOutlineSvg}></AntdIcon>;
};

RadarOutline.displayName = 'RadarOutline';
RadarOutline.inheritAttrs = false;
export default RadarOutline;