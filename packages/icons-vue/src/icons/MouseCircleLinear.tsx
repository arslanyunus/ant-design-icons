// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MouseCircleLinearSvg from '@ant-design/icons-svg/lib/asn/MouseCircleLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MouseCircleLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MouseCircleLinear: MouseCircleLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MouseCircleLinearSvg}></AntdIcon>;
};

MouseCircleLinear.displayName = 'MouseCircleLinear';
MouseCircleLinear.inheritAttrs = false;
export default MouseCircleLinear;