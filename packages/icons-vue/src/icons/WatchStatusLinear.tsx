// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import WatchStatusLinearSvg from '@ant-design/icons-svg/lib/asn/WatchStatusLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface WatchStatusLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const WatchStatusLinear: WatchStatusLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WatchStatusLinearSvg}></AntdIcon>;
};

WatchStatusLinear.displayName = 'WatchStatusLinear';
WatchStatusLinear.inheritAttrs = false;
export default WatchStatusLinear;