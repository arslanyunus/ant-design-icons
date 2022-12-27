// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HomeWifiTwoToneSvg from '@ant-design/icons-svg/lib/asn/HomeWifiTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HomeWifiTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HomeWifiTwoTone: HomeWifiTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HomeWifiTwoToneSvg}></AntdIcon>;
};

HomeWifiTwoTone.displayName = 'HomeWifiTwoTone';
HomeWifiTwoTone.inheritAttrs = false;
export default HomeWifiTwoTone;