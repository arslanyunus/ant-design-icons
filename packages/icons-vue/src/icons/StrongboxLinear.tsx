// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import StrongboxLinearSvg from '@ant-design/icons-svg/lib/asn/StrongboxLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface StrongboxLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const StrongboxLinear: StrongboxLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={StrongboxLinearSvg}></AntdIcon>;
};

StrongboxLinear.displayName = 'StrongboxLinear';
StrongboxLinear.inheritAttrs = false;
export default StrongboxLinear;