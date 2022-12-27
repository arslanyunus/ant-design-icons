// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LocationCrossOutlineSvg from '@ant-design/icons-svg/lib/asn/LocationCrossOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LocationCrossOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LocationCrossOutline: LocationCrossOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LocationCrossOutlineSvg}></AntdIcon>;
};

LocationCrossOutline.displayName = 'LocationCrossOutline';
LocationCrossOutline.inheritAttrs = false;
export default LocationCrossOutline;