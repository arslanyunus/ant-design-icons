// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RoutingBrokenSvg from '@ant-design/icons-svg/lib/asn/RoutingBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RoutingBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RoutingBroken: RoutingBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RoutingBrokenSvg}></AntdIcon>;
};

RoutingBroken.displayName = 'RoutingBroken';
RoutingBroken.inheritAttrs = false;
export default RoutingBroken;