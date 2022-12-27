// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LocationCrossBoldSvg from '@ant-design/icons-svg/lib/asn/LocationCrossBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LocationCrossBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LocationCrossBold: LocationCrossBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LocationCrossBoldSvg}></AntdIcon>;
};

LocationCrossBold.displayName = 'LocationCrossBold';
LocationCrossBold.inheritAttrs = false;
export default LocationCrossBold;