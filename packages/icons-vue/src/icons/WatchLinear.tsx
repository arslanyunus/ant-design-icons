// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import WatchLinearSvg from '@ant-design/icons-svg/lib/asn/WatchLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface WatchLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const WatchLinear: WatchLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WatchLinearSvg}></AntdIcon>;
};

WatchLinear.displayName = 'WatchLinear';
WatchLinear.inheritAttrs = false;
export default WatchLinear;