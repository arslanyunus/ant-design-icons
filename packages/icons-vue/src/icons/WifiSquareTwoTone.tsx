// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import WifiSquareTwoToneSvg from '@ant-design/icons-svg/lib/asn/WifiSquareTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface WifiSquareTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const WifiSquareTwoTone: WifiSquareTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WifiSquareTwoToneSvg}></AntdIcon>;
};

WifiSquareTwoTone.displayName = 'WifiSquareTwoTone';
WifiSquareTwoTone.inheritAttrs = false;
export default WifiSquareTwoTone;