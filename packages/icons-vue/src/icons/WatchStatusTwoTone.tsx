// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import WatchStatusTwoToneSvg from '@ant-design/icons-svg/lib/asn/WatchStatusTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface WatchStatusTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const WatchStatusTwoTone: WatchStatusTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WatchStatusTwoToneSvg}></AntdIcon>;
};

WatchStatusTwoTone.displayName = 'WatchStatusTwoTone';
WatchStatusTwoTone.inheritAttrs = false;
export default WatchStatusTwoTone;