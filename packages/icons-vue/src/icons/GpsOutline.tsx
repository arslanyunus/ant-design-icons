// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GpsOutlineSvg from '@ant-design/icons-svg/lib/asn/GpsOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GpsOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GpsOutline: GpsOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GpsOutlineSvg}></AntdIcon>;
};

GpsOutline.displayName = 'GpsOutline';
GpsOutline.inheritAttrs = false;
export default GpsOutline;