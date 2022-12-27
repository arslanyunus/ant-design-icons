// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MainComponentBoldSvg from '@ant-design/icons-svg/lib/asn/MainComponentBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MainComponentBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MainComponentBold: MainComponentBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MainComponentBoldSvg}></AntdIcon>;
};

MainComponentBold.displayName = 'MainComponentBold';
MainComponentBold.inheritAttrs = false;
export default MainComponentBold;