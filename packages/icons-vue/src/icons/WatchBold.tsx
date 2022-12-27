// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import WatchBoldSvg from '@ant-design/icons-svg/lib/asn/WatchBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface WatchBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const WatchBold: WatchBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WatchBoldSvg}></AntdIcon>;
};

WatchBold.displayName = 'WatchBold';
WatchBold.inheritAttrs = false;
export default WatchBold;