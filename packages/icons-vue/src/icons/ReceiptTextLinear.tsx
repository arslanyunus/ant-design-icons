// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ReceiptTextLinearSvg from '@ant-design/icons-svg/lib/asn/ReceiptTextLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ReceiptTextLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ReceiptTextLinear: ReceiptTextLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ReceiptTextLinearSvg}></AntdIcon>;
};

ReceiptTextLinear.displayName = 'ReceiptTextLinear';
ReceiptTextLinear.inheritAttrs = false;
export default ReceiptTextLinear;