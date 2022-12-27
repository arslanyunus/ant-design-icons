// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LocationSlashBulkSvg from '@ant-design/icons-svg/lib/asn/LocationSlashBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LocationSlashBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LocationSlashBulk: LocationSlashBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LocationSlashBulkSvg}></AntdIcon>;
};

LocationSlashBulk.displayName = 'LocationSlashBulk';
LocationSlashBulk.inheritAttrs = false;
export default LocationSlashBulk;