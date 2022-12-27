// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LocationAddOutlineSvg from '@ant-design/icons-svg/lib/asn/LocationAddOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LocationAddOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LocationAddOutline: LocationAddOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LocationAddOutlineSvg}></AntdIcon>;
};

LocationAddOutline.displayName = 'LocationAddOutline';
LocationAddOutline.inheritAttrs = false;
export default LocationAddOutline;