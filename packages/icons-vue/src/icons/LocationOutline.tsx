// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LocationOutlineSvg from '@ant-design/icons-svg/lib/asn/LocationOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LocationOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LocationOutline: LocationOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LocationOutlineSvg}></AntdIcon>;
};

LocationOutline.displayName = 'LocationOutline';
LocationOutline.inheritAttrs = false;
export default LocationOutline;