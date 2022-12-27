// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LocationCrossLinearSvg from '@ant-design/icons-svg/lib/asn/LocationCrossLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LocationCrossLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LocationCrossLinear: LocationCrossLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LocationCrossLinearSvg}></AntdIcon>;
};

LocationCrossLinear.displayName = 'LocationCrossLinear';
LocationCrossLinear.inheritAttrs = false;
export default LocationCrossLinear;