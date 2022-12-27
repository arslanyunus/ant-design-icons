// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import WifiLinearSvg from '@ant-design/icons-svg/lib/asn/WifiLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface WifiLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const WifiLinear: WifiLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WifiLinearSvg}></AntdIcon>;
};

WifiLinear.displayName = 'WifiLinear';
WifiLinear.inheritAttrs = false;
export default WifiLinear;