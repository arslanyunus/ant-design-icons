// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LocationMinusLinearSvg from '@ant-design/icons-svg/lib/asn/LocationMinusLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LocationMinusLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LocationMinusLinear: LocationMinusLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LocationMinusLinearSvg}></AntdIcon>;
};

LocationMinusLinear.displayName = 'LocationMinusLinear';
LocationMinusLinear.inheritAttrs = false;
export default LocationMinusLinear;