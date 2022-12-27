// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LocationMinusOutlineSvg from '@ant-design/icons-svg/lib/asn/LocationMinusOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LocationMinusOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LocationMinusOutline: LocationMinusOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LocationMinusOutlineSvg}></AntdIcon>;
};

LocationMinusOutline.displayName = 'LocationMinusOutline';
LocationMinusOutline.inheritAttrs = false;
export default LocationMinusOutline;