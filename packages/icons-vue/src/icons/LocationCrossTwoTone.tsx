// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LocationCrossTwoToneSvg from '@ant-design/icons-svg/lib/asn/LocationCrossTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LocationCrossTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LocationCrossTwoTone: LocationCrossTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LocationCrossTwoToneSvg}></AntdIcon>;
};

LocationCrossTwoTone.displayName = 'LocationCrossTwoTone';
LocationCrossTwoTone.inheritAttrs = false;
export default LocationCrossTwoTone;