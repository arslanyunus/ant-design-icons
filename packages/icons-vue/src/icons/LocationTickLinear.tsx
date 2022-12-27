// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LocationTickLinearSvg from '@ant-design/icons-svg/lib/asn/LocationTickLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LocationTickLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LocationTickLinear: LocationTickLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LocationTickLinearSvg}></AntdIcon>;
};

LocationTickLinear.displayName = 'LocationTickLinear';
LocationTickLinear.inheritAttrs = false;
export default LocationTickLinear;