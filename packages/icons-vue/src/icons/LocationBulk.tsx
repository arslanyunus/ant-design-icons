// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LocationBulkSvg from '@ant-design/icons-svg/lib/asn/LocationBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LocationBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LocationBulk: LocationBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LocationBulkSvg}></AntdIcon>;
};

LocationBulk.displayName = 'LocationBulk';
LocationBulk.inheritAttrs = false;
export default LocationBulk;