// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AirpodBoldSvg from '@ant-design/icons-svg/lib/asn/AirpodBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AirpodBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AirpodBold: AirpodBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AirpodBoldSvg}></AntdIcon>;
};

AirpodBold.displayName = 'AirpodBold';
AirpodBold.inheritAttrs = false;
export default AirpodBold;