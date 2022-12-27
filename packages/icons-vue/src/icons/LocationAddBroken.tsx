// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LocationAddBrokenSvg from '@ant-design/icons-svg/lib/asn/LocationAddBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LocationAddBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LocationAddBroken: LocationAddBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LocationAddBrokenSvg}></AntdIcon>;
};

LocationAddBroken.displayName = 'LocationAddBroken';
LocationAddBroken.inheritAttrs = false;
export default LocationAddBroken;