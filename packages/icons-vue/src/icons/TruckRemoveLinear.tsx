// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TruckRemoveLinearSvg from '@ant-design/icons-svg/lib/asn/TruckRemoveLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TruckRemoveLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TruckRemoveLinear: TruckRemoveLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TruckRemoveLinearSvg}></AntdIcon>;
};

TruckRemoveLinear.displayName = 'TruckRemoveLinear';
TruckRemoveLinear.inheritAttrs = false;
export default TruckRemoveLinear;