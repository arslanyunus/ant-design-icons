// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CalculatorBrokenSvg from '@ant-design/icons-svg/lib/asn/CalculatorBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CalculatorBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CalculatorBroken: CalculatorBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CalculatorBrokenSvg}></AntdIcon>;
};

CalculatorBroken.displayName = 'CalculatorBroken';
CalculatorBroken.inheritAttrs = false;
export default CalculatorBroken;