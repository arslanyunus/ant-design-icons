// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RoutingTwoToneSvg from '@ant-design/icons-svg/lib/asn/RoutingTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RoutingTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RoutingTwoTone: RoutingTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RoutingTwoToneSvg}></AntdIcon>;
};

RoutingTwoTone.displayName = 'RoutingTwoTone';
RoutingTwoTone.inheritAttrs = false;
export default RoutingTwoTone;