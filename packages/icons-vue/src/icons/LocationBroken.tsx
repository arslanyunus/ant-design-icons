// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LocationBrokenSvg from '@ant-design/icons-svg/lib/asn/LocationBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LocationBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LocationBroken: LocationBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LocationBrokenSvg}></AntdIcon>;
};

LocationBroken.displayName = 'LocationBroken';
LocationBroken.inheritAttrs = false;
export default LocationBroken;