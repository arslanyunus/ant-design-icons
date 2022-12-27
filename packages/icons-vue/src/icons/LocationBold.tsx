// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LocationBoldSvg from '@ant-design/icons-svg/lib/asn/LocationBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LocationBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LocationBold: LocationBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LocationBoldSvg}></AntdIcon>;
};

LocationBold.displayName = 'LocationBold';
LocationBold.inheritAttrs = false;
export default LocationBold;