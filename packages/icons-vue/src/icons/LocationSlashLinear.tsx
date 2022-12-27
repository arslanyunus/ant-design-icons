// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LocationSlashLinearSvg from '@ant-design/icons-svg/lib/asn/LocationSlashLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LocationSlashLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LocationSlashLinear: LocationSlashLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LocationSlashLinearSvg}></AntdIcon>;
};

LocationSlashLinear.displayName = 'LocationSlashLinear';
LocationSlashLinear.inheritAttrs = false;
export default LocationSlashLinear;