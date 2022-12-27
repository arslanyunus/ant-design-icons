// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MouseLinearSvg from '@ant-design/icons-svg/lib/asn/MouseLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MouseLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MouseLinear: MouseLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MouseLinearSvg}></AntdIcon>;
};

MouseLinear.displayName = 'MouseLinear';
MouseLinear.inheritAttrs = false;
export default MouseLinear;