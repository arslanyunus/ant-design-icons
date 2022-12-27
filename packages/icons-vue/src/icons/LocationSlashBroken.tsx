// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LocationSlashBrokenSvg from '@ant-design/icons-svg/lib/asn/LocationSlashBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LocationSlashBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LocationSlashBroken: LocationSlashBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LocationSlashBrokenSvg}></AntdIcon>;
};

LocationSlashBroken.displayName = 'LocationSlashBroken';
LocationSlashBroken.inheritAttrs = false;
export default LocationSlashBroken;