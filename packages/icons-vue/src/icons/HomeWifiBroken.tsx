// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HomeWifiBrokenSvg from '@ant-design/icons-svg/lib/asn/HomeWifiBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HomeWifiBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HomeWifiBroken: HomeWifiBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HomeWifiBrokenSvg}></AntdIcon>;
};

HomeWifiBroken.displayName = 'HomeWifiBroken';
HomeWifiBroken.inheritAttrs = false;
export default HomeWifiBroken;