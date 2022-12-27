// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TruckTimeLinearSvg from '@ant-design/icons-svg/lib/asn/TruckTimeLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TruckTimeLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TruckTimeLinear: TruckTimeLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TruckTimeLinearSvg}></AntdIcon>;
};

TruckTimeLinear.displayName = 'TruckTimeLinear';
TruckTimeLinear.inheritAttrs = false;
export default TruckTimeLinear;