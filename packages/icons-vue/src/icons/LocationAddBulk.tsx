// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LocationAddBulkSvg from '@ant-design/icons-svg/lib/asn/LocationAddBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LocationAddBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LocationAddBulk: LocationAddBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LocationAddBulkSvg}></AntdIcon>;
};

LocationAddBulk.displayName = 'LocationAddBulk';
LocationAddBulk.inheritAttrs = false;
export default LocationAddBulk;