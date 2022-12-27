// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AirplaneLinearSvg from '@ant-design/icons-svg/lib/asn/AirplaneLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AirplaneLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AirplaneLinear: AirplaneLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AirplaneLinearSvg}></AntdIcon>;
};

AirplaneLinear.displayName = 'AirplaneLinear';
AirplaneLinear.inheritAttrs = false;
export default AirplaneLinear;