// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AirpodsBoldSvg from '@ant-design/icons-svg/lib/asn/AirpodsBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AirpodsBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AirpodsBold: AirpodsBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AirpodsBoldSvg}></AntdIcon>;
};

AirpodsBold.displayName = 'AirpodsBold';
AirpodsBold.inheritAttrs = false;
export default AirpodsBold;