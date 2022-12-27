// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LocationTickOutlineSvg from '@ant-design/icons-svg/lib/asn/LocationTickOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LocationTickOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LocationTickOutline: LocationTickOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LocationTickOutlineSvg}></AntdIcon>;
};

LocationTickOutline.displayName = 'LocationTickOutline';
LocationTickOutline.inheritAttrs = false;
export default LocationTickOutline;