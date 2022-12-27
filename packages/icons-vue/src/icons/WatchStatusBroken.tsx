// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import WatchStatusBrokenSvg from '@ant-design/icons-svg/lib/asn/WatchStatusBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface WatchStatusBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const WatchStatusBroken: WatchStatusBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WatchStatusBrokenSvg}></AntdIcon>;
};

WatchStatusBroken.displayName = 'WatchStatusBroken';
WatchStatusBroken.inheritAttrs = false;
export default WatchStatusBroken;