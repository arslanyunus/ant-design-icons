// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TruckTickLinearSvg from '@ant-design/icons-svg/lib/asn/TruckTickLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TruckTickLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TruckTickLinear: TruckTickLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TruckTickLinearSvg}></AntdIcon>;
};

TruckTickLinear.displayName = 'TruckTickLinear';
TruckTickLinear.inheritAttrs = false;
export default TruckTickLinear;