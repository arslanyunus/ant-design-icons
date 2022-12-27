// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import WifiSquareBrokenSvg from '@ant-design/icons-svg/lib/asn/WifiSquareBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface WifiSquareBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const WifiSquareBroken: WifiSquareBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WifiSquareBrokenSvg}></AntdIcon>;
};

WifiSquareBroken.displayName = 'WifiSquareBroken';
WifiSquareBroken.inheritAttrs = false;
export default WifiSquareBroken;