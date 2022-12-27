// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LocationTickTwoToneSvg from '@ant-design/icons-svg/lib/asn/LocationTickTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LocationTickTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LocationTickTwoTone: LocationTickTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LocationTickTwoToneSvg}></AntdIcon>;
};

LocationTickTwoTone.displayName = 'LocationTickTwoTone';
LocationTickTwoTone.inheritAttrs = false;
export default LocationTickTwoTone;