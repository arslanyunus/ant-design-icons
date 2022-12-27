// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RoutingBulkSvg from '@ant-design/icons-svg/lib/asn/RoutingBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RoutingBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RoutingBulk: RoutingBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RoutingBulkSvg}></AntdIcon>;
};

RoutingBulk.displayName = 'RoutingBulk';
RoutingBulk.inheritAttrs = false;
export default RoutingBulk;