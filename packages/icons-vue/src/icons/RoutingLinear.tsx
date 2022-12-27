// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RoutingLinearSvg from '@ant-design/icons-svg/lib/asn/RoutingLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RoutingLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RoutingLinear: RoutingLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RoutingLinearSvg}></AntdIcon>;
};

RoutingLinear.displayName = 'RoutingLinear';
RoutingLinear.inheritAttrs = false;
export default RoutingLinear;