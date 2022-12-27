// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LocationAddLinearSvg from '@ant-design/icons-svg/lib/asn/LocationAddLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LocationAddLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LocationAddLinear: LocationAddLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LocationAddLinearSvg}></AntdIcon>;
};

LocationAddLinear.displayName = 'LocationAddLinear';
LocationAddLinear.inheritAttrs = false;
export default LocationAddLinear;