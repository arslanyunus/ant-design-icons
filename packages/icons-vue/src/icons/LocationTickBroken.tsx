// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LocationTickBrokenSvg from '@ant-design/icons-svg/lib/asn/LocationTickBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LocationTickBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LocationTickBroken: LocationTickBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LocationTickBrokenSvg}></AntdIcon>;
};

LocationTickBroken.displayName = 'LocationTickBroken';
LocationTickBroken.inheritAttrs = false;
export default LocationTickBroken;