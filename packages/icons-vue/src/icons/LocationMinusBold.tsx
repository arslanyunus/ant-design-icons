// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LocationMinusBoldSvg from '@ant-design/icons-svg/lib/asn/LocationMinusBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LocationMinusBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LocationMinusBold: LocationMinusBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LocationMinusBoldSvg}></AntdIcon>;
};

LocationMinusBold.displayName = 'LocationMinusBold';
LocationMinusBold.inheritAttrs = false;
export default LocationMinusBold;