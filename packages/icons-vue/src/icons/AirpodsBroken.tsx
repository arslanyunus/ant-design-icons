// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AirpodsBrokenSvg from '@ant-design/icons-svg/lib/asn/AirpodsBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AirpodsBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AirpodsBroken: AirpodsBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AirpodsBrokenSvg}></AntdIcon>;
};

AirpodsBroken.displayName = 'AirpodsBroken';
AirpodsBroken.inheritAttrs = false;
export default AirpodsBroken;