// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ReceiptMinusBrokenSvg from '@ant-design/icons-svg/lib/asn/ReceiptMinusBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ReceiptMinusBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ReceiptMinusBroken: ReceiptMinusBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ReceiptMinusBrokenSvg}></AntdIcon>;
};

ReceiptMinusBroken.displayName = 'ReceiptMinusBroken';
ReceiptMinusBroken.inheritAttrs = false;
export default ReceiptMinusBroken;