// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ReceiptDisscountLinearSvg from '@ant-design/icons-svg/lib/asn/ReceiptDisscountLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ReceiptDisscountLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ReceiptDisscountLinear: ReceiptDisscountLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ReceiptDisscountLinearSvg}></AntdIcon>;
};

ReceiptDisscountLinear.displayName = 'ReceiptDisscountLinear';
ReceiptDisscountLinear.inheritAttrs = false;
export default ReceiptDisscountLinear;