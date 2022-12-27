// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MainComponentLinearSvg from '@ant-design/icons-svg/lib/asn/MainComponentLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MainComponentLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MainComponentLinear: MainComponentLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MainComponentLinearSvg}></AntdIcon>;
};

MainComponentLinear.displayName = 'MainComponentLinear';
MainComponentLinear.inheritAttrs = false;
export default MainComponentLinear;