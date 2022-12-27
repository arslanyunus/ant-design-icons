// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LocationMinusBrokenSvg from '@ant-design/icons-svg/lib/asn/LocationMinusBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LocationMinusBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LocationMinusBroken: LocationMinusBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LocationMinusBrokenSvg}></AntdIcon>;
};

LocationMinusBroken.displayName = 'LocationMinusBroken';
LocationMinusBroken.inheritAttrs = false;
export default LocationMinusBroken;