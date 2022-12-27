// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import WatchTwoToneSvg from '@ant-design/icons-svg/lib/asn/WatchTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface WatchTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const WatchTwoTone: WatchTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WatchTwoToneSvg}></AntdIcon>;
};

WatchTwoTone.displayName = 'WatchTwoTone';
WatchTwoTone.inheritAttrs = false;
export default WatchTwoTone;