// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MouseSquareLinearSvg from '@ant-design/icons-svg/lib/asn/MouseSquareLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MouseSquareLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MouseSquareLinear: MouseSquareLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MouseSquareLinearSvg}></AntdIcon>;
};

MouseSquareLinear.displayName = 'MouseSquareLinear';
MouseSquareLinear.inheritAttrs = false;
export default MouseSquareLinear;