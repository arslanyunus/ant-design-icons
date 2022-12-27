// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TickSquareLinearSvg from '@ant-design/icons-svg/lib/asn/TickSquareLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TickSquareLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TickSquareLinear: TickSquareLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TickSquareLinearSvg}></AntdIcon>;
};

TickSquareLinear.displayName = 'TickSquareLinear';
TickSquareLinear.inheritAttrs = false;
export default TickSquareLinear;