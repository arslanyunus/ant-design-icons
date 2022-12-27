// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CalculatorLinearSvg from '@ant-design/icons-svg/lib/asn/CalculatorLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CalculatorLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CalculatorLinear: CalculatorLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CalculatorLinearSvg}></AntdIcon>;
};

CalculatorLinear.displayName = 'CalculatorLinear';
CalculatorLinear.inheritAttrs = false;
export default CalculatorLinear;