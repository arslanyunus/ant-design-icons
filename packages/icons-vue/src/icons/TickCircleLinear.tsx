// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TickCircleLinearSvg from '@ant-design/icons-svg/lib/asn/TickCircleLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TickCircleLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TickCircleLinear: TickCircleLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TickCircleLinearSvg}></AntdIcon>;
};

TickCircleLinear.displayName = 'TickCircleLinear';
TickCircleLinear.inheritAttrs = false;
export default TickCircleLinear;