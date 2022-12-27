// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GlobalLinearSvg from '@ant-design/icons-svg/lib/asn/GlobalLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GlobalLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GlobalLinear: GlobalLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GlobalLinearSvg}></AntdIcon>;
};

GlobalLinear.displayName = 'GlobalLinear';
GlobalLinear.inheritAttrs = false;
export default GlobalLinear;