// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LocationTickBoldSvg from '@ant-design/icons-svg/lib/asn/LocationTickBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LocationTickBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LocationTickBold: LocationTickBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LocationTickBoldSvg}></AntdIcon>;
};

LocationTickBold.displayName = 'LocationTickBold';
LocationTickBold.inheritAttrs = false;
export default LocationTickBold;