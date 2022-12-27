// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import WifiOutlineSvg from '@ant-design/icons-svg/lib/asn/WifiOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface WifiOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const WifiOutline: WifiOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WifiOutlineSvg}></AntdIcon>;
};

WifiOutline.displayName = 'WifiOutline';
WifiOutline.inheritAttrs = false;
export default WifiOutline;