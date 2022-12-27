// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LocationSlashBoldSvg from '@ant-design/icons-svg/lib/asn/LocationSlashBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LocationSlashBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LocationSlashBold: LocationSlashBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LocationSlashBoldSvg}></AntdIcon>;
};

LocationSlashBold.displayName = 'LocationSlashBold';
LocationSlashBold.inheritAttrs = false;
export default LocationSlashBold;