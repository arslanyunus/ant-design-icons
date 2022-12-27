// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BusLinearSvg from '@ant-design/icons-svg/lib/asn/BusLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BusLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BusLinear: BusLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BusLinearSvg}></AntdIcon>;
};

BusLinear.displayName = 'BusLinear';
BusLinear.inheritAttrs = false;
export default BusLinear;