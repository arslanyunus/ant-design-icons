// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LocationCrossBulkSvg from '@ant-design/icons-svg/lib/asn/LocationCrossBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LocationCrossBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LocationCrossBulk: LocationCrossBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LocationCrossBulkSvg}></AntdIcon>;
};

LocationCrossBulk.displayName = 'LocationCrossBulk';
LocationCrossBulk.inheritAttrs = false;
export default LocationCrossBulk;