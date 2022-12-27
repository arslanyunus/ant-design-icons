// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LocationSlashOutlineSvg from '@ant-design/icons-svg/lib/asn/LocationSlashOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LocationSlashOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LocationSlashOutline: LocationSlashOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LocationSlashOutlineSvg}></AntdIcon>;
};

LocationSlashOutline.displayName = 'LocationSlashOutline';
LocationSlashOutline.inheritAttrs = false;
export default LocationSlashOutline;