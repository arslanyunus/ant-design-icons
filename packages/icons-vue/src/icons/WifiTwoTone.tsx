// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import WifiTwoToneSvg from '@ant-design/icons-svg/lib/asn/WifiTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface WifiTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const WifiTwoTone: WifiTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WifiTwoToneSvg}></AntdIcon>;
};

WifiTwoTone.displayName = 'WifiTwoTone';
WifiTwoTone.inheritAttrs = false;
export default WifiTwoTone;