// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HomeHashtagBrokenSvg from '@ant-design/icons-svg/lib/asn/HomeHashtagBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HomeHashtagBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HomeHashtagBroken: HomeHashtagBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HomeHashtagBrokenSvg}></AntdIcon>;
};

HomeHashtagBroken.displayName = 'HomeHashtagBroken';
HomeHashtagBroken.inheritAttrs = false;
export default HomeHashtagBroken;