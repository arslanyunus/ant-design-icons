// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import WifiSquareBoldSvg from '@ant-design/icons-svg/lib/asn/WifiSquareBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface WifiSquareBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const WifiSquareBold: WifiSquareBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WifiSquareBoldSvg}></AntdIcon>;
};

WifiSquareBold.displayName = 'WifiSquareBold';
WifiSquareBold.inheritAttrs = false;
export default WifiSquareBold;