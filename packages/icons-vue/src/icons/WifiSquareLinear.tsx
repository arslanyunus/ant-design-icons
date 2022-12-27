// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import WifiSquareLinearSvg from '@ant-design/icons-svg/lib/asn/WifiSquareLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface WifiSquareLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const WifiSquareLinear: WifiSquareLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WifiSquareLinearSvg}></AntdIcon>;
};

WifiSquareLinear.displayName = 'WifiSquareLinear';
WifiSquareLinear.inheritAttrs = false;
export default WifiSquareLinear;