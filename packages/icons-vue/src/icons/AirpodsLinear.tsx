// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AirpodsLinearSvg from '@ant-design/icons-svg/lib/asn/AirpodsLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AirpodsLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AirpodsLinear: AirpodsLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AirpodsLinearSvg}></AntdIcon>;
};

AirpodsLinear.displayName = 'AirpodsLinear';
AirpodsLinear.inheritAttrs = false;
export default AirpodsLinear;