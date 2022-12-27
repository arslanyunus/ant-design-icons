// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import StickynoteLinearSvg from '@ant-design/icons-svg/lib/asn/StickynoteLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface StickynoteLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const StickynoteLinear: StickynoteLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={StickynoteLinearSvg}></AntdIcon>;
};

StickynoteLinear.displayName = 'StickynoteLinear';
StickynoteLinear.inheritAttrs = false;
export default StickynoteLinear;