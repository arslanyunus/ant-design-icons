// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AirpodBrokenSvg from '@ant-design/icons-svg/lib/asn/AirpodBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AirpodBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AirpodBroken: AirpodBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AirpodBrokenSvg}></AntdIcon>;
};

AirpodBroken.displayName = 'AirpodBroken';
AirpodBroken.inheritAttrs = false;
export default AirpodBroken;