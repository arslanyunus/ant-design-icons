// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AirplaneSquareLinearSvg from '@ant-design/icons-svg/lib/asn/AirplaneSquareLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AirplaneSquareLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AirplaneSquareLinear: AirplaneSquareLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AirplaneSquareLinearSvg}></AntdIcon>;
};

AirplaneSquareLinear.displayName = 'AirplaneSquareLinear';
AirplaneSquareLinear.inheritAttrs = false;
export default AirplaneSquareLinear;