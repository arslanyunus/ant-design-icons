// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LocationCrossBrokenSvg from '@ant-design/icons-svg/lib/asn/LocationCrossBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LocationCrossBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LocationCrossBroken: LocationCrossBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LocationCrossBrokenSvg}></AntdIcon>;
};

LocationCrossBroken.displayName = 'LocationCrossBroken';
LocationCrossBroken.inheritAttrs = false;
export default LocationCrossBroken;