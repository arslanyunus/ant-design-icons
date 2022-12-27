// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LocationTwoToneSvg from '@ant-design/icons-svg/lib/asn/LocationTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LocationTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LocationTwoTone: LocationTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LocationTwoToneSvg}></AntdIcon>;
};

LocationTwoTone.displayName = 'LocationTwoTone';
LocationTwoTone.inheritAttrs = false;
export default LocationTwoTone;