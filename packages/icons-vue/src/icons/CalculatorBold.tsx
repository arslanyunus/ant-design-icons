// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CalculatorBoldSvg from '@ant-design/icons-svg/lib/asn/CalculatorBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CalculatorBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CalculatorBold: CalculatorBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CalculatorBoldSvg}></AntdIcon>;
};

CalculatorBold.displayName = 'CalculatorBold';
CalculatorBold.inheritAttrs = false;
export default CalculatorBold;