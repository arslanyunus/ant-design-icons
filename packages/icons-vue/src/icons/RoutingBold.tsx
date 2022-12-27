// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RoutingBoldSvg from '@ant-design/icons-svg/lib/asn/RoutingBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RoutingBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RoutingBold: RoutingBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RoutingBoldSvg}></AntdIcon>;
};

RoutingBold.displayName = 'RoutingBold';
RoutingBold.inheritAttrs = false;
export default RoutingBold;