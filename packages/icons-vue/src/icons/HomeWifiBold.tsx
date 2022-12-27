// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HomeWifiBoldSvg from '@ant-design/icons-svg/lib/asn/HomeWifiBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HomeWifiBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HomeWifiBold: HomeWifiBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HomeWifiBoldSvg}></AntdIcon>;
};

HomeWifiBold.displayName = 'HomeWifiBold';
HomeWifiBold.inheritAttrs = false;
export default HomeWifiBold;