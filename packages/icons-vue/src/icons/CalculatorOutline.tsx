// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CalculatorOutlineSvg from '@ant-design/icons-svg/lib/asn/CalculatorOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CalculatorOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CalculatorOutline: CalculatorOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CalculatorOutlineSvg}></AntdIcon>;
};

CalculatorOutline.displayName = 'CalculatorOutline';
CalculatorOutline.inheritAttrs = false;
export default CalculatorOutline;