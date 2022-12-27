// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DiscoverLinearSvg from '@ant-design/icons-svg/lib/asn/DiscoverLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DiscoverLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DiscoverLinear: DiscoverLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DiscoverLinearSvg}></AntdIcon>;
};

DiscoverLinear.displayName = 'DiscoverLinear';
DiscoverLinear.inheritAttrs = false;
export default DiscoverLinear;