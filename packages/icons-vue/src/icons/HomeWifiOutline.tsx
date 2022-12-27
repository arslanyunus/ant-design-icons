// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HomeWifiOutlineSvg from '@ant-design/icons-svg/lib/asn/HomeWifiOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HomeWifiOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HomeWifiOutline: HomeWifiOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HomeWifiOutlineSvg}></AntdIcon>;
};

HomeWifiOutline.displayName = 'HomeWifiOutline';
HomeWifiOutline.inheritAttrs = false;
export default HomeWifiOutline;