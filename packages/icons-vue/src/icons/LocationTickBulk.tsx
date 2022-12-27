// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LocationTickBulkSvg from '@ant-design/icons-svg/lib/asn/LocationTickBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LocationTickBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LocationTickBulk: LocationTickBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LocationTickBulkSvg}></AntdIcon>;
};

LocationTickBulk.displayName = 'LocationTickBulk';
LocationTickBulk.inheritAttrs = false;
export default LocationTickBulk;