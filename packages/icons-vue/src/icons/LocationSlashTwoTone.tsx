// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LocationSlashTwoToneSvg from '@ant-design/icons-svg/lib/asn/LocationSlashTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LocationSlashTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LocationSlashTwoTone: LocationSlashTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LocationSlashTwoToneSvg}></AntdIcon>;
};

LocationSlashTwoTone.displayName = 'LocationSlashTwoTone';
LocationSlashTwoTone.inheritAttrs = false;
export default LocationSlashTwoTone;