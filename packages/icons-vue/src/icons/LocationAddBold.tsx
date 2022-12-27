// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LocationAddBoldSvg from '@ant-design/icons-svg/lib/asn/LocationAddBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LocationAddBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LocationAddBold: LocationAddBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LocationAddBoldSvg}></AntdIcon>;
};

LocationAddBold.displayName = 'LocationAddBold';
LocationAddBold.inheritAttrs = false;
export default LocationAddBold;