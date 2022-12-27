// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import WatchBrokenSvg from '@ant-design/icons-svg/lib/asn/WatchBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface WatchBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const WatchBroken: WatchBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WatchBrokenSvg}></AntdIcon>;
};

WatchBroken.displayName = 'WatchBroken';
WatchBroken.inheritAttrs = false;
export default WatchBroken;