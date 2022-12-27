// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import WatchStatusBoldSvg from '@ant-design/icons-svg/lib/asn/WatchStatusBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface WatchStatusBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const WatchStatusBold: WatchStatusBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WatchStatusBoldSvg}></AntdIcon>;
};

WatchStatusBold.displayName = 'WatchStatusBold';
WatchStatusBold.inheritAttrs = false;
export default WatchStatusBold;