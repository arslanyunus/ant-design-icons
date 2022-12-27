// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LocationMinusTwoToneSvg from '@ant-design/icons-svg/lib/asn/LocationMinusTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LocationMinusTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LocationMinusTwoTone: LocationMinusTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LocationMinusTwoToneSvg}></AntdIcon>;
};

LocationMinusTwoTone.displayName = 'LocationMinusTwoTone';
LocationMinusTwoTone.inheritAttrs = false;
export default LocationMinusTwoTone;