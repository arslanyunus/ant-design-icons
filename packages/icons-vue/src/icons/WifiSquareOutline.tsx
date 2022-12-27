// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import WifiSquareOutlineSvg from '@ant-design/icons-svg/lib/asn/WifiSquareOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface WifiSquareOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const WifiSquareOutline: WifiSquareOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WifiSquareOutlineSvg}></AntdIcon>;
};

WifiSquareOutline.displayName = 'WifiSquareOutline';
WifiSquareOutline.inheritAttrs = false;
export default WifiSquareOutline;