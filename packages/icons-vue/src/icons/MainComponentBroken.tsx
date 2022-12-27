// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MainComponentBrokenSvg from '@ant-design/icons-svg/lib/asn/MainComponentBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MainComponentBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MainComponentBroken: MainComponentBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MainComponentBrokenSvg}></AntdIcon>;
};

MainComponentBroken.displayName = 'MainComponentBroken';
MainComponentBroken.inheritAttrs = false;
export default MainComponentBroken;