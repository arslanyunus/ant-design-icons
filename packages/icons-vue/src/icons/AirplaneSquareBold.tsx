// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AirplaneSquareBoldSvg from '@ant-design/icons-svg/lib/asn/AirplaneSquareBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AirplaneSquareBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AirplaneSquareBold: AirplaneSquareBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AirplaneSquareBoldSvg}></AntdIcon>;
};

AirplaneSquareBold.displayName = 'AirplaneSquareBold';
AirplaneSquareBold.inheritAttrs = false;
export default AirplaneSquareBold;