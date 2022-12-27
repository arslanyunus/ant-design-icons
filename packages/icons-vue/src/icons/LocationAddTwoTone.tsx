// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LocationAddTwoToneSvg from '@ant-design/icons-svg/lib/asn/LocationAddTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LocationAddTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LocationAddTwoTone: LocationAddTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LocationAddTwoToneSvg}></AntdIcon>;
};

LocationAddTwoTone.displayName = 'LocationAddTwoTone';
LocationAddTwoTone.inheritAttrs = false;
export default LocationAddTwoTone;