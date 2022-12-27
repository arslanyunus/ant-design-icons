// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ReceiptAddLinearSvg from '@ant-design/icons-svg/lib/asn/ReceiptAddLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ReceiptAddLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ReceiptAddLinear: ReceiptAddLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ReceiptAddLinearSvg}></AntdIcon>;
};

ReceiptAddLinear.displayName = 'ReceiptAddLinear';
ReceiptAddLinear.inheritAttrs = false;
export default ReceiptAddLinear;