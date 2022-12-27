// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HomeWifiLinearSvg from '@ant-design/icons-svg/lib/asn/HomeWifiLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HomeWifiLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HomeWifiLinear: HomeWifiLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HomeWifiLinearSvg}></AntdIcon>;
};

HomeWifiLinear.displayName = 'HomeWifiLinear';
HomeWifiLinear.inheritAttrs = false;
export default HomeWifiLinear;