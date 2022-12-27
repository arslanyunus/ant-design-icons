// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LocationLinearSvg from '@ant-design/icons-svg/lib/asn/LocationLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LocationLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LocationLinear: LocationLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LocationLinearSvg}></AntdIcon>;
};

LocationLinear.displayName = 'LocationLinear';
LocationLinear.inheritAttrs = false;
export default LocationLinear;