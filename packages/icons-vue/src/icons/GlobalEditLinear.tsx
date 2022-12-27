// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GlobalEditLinearSvg from '@ant-design/icons-svg/lib/asn/GlobalEditLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GlobalEditLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GlobalEditLinear: GlobalEditLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GlobalEditLinearSvg}></AntdIcon>;
};

GlobalEditLinear.displayName = 'GlobalEditLinear';
GlobalEditLinear.inheritAttrs = false;
export default GlobalEditLinear;