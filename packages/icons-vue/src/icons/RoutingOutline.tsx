// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RoutingOutlineSvg from '@ant-design/icons-svg/lib/asn/RoutingOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RoutingOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RoutingOutline: RoutingOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RoutingOutlineSvg}></AntdIcon>;
};

RoutingOutline.displayName = 'RoutingOutline';
RoutingOutline.inheritAttrs = false;
export default RoutingOutline;