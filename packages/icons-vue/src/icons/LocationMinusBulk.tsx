// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LocationMinusBulkSvg from '@ant-design/icons-svg/lib/asn/LocationMinusBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LocationMinusBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LocationMinusBulk: LocationMinusBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LocationMinusBulkSvg}></AntdIcon>;
};

LocationMinusBulk.displayName = 'LocationMinusBulk';
LocationMinusBulk.inheritAttrs = false;
export default LocationMinusBulk;