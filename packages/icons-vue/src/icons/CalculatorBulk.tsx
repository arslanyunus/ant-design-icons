// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CalculatorBulkSvg from '@ant-design/icons-svg/lib/asn/CalculatorBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CalculatorBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CalculatorBulk: CalculatorBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CalculatorBulkSvg}></AntdIcon>;
};

CalculatorBulk.displayName = 'CalculatorBulk';
CalculatorBulk.inheritAttrs = false;
export default CalculatorBulk;