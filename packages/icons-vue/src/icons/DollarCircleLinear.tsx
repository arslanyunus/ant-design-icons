// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DollarCircleLinearSvg from '@ant-design/icons-svg/lib/asn/DollarCircleLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DollarCircleLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DollarCircleLinear: DollarCircleLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DollarCircleLinearSvg}></AntdIcon>;
};

DollarCircleLinear.displayName = 'DollarCircleLinear';
DollarCircleLinear.inheritAttrs = false;
export default DollarCircleLinear;