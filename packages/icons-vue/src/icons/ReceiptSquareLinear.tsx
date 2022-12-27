// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ReceiptSquareLinearSvg from '@ant-design/icons-svg/lib/asn/ReceiptSquareLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ReceiptSquareLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ReceiptSquareLinear: ReceiptSquareLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ReceiptSquareLinearSvg}></AntdIcon>;
};

ReceiptSquareLinear.displayName = 'ReceiptSquareLinear';
ReceiptSquareLinear.inheritAttrs = false;
export default ReceiptSquareLinear;