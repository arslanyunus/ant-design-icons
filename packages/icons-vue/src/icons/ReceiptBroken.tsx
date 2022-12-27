// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ReceiptBrokenSvg from '@ant-design/icons-svg/lib/asn/ReceiptBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ReceiptBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ReceiptBroken: ReceiptBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ReceiptBrokenSvg}></AntdIcon>;
};

ReceiptBroken.displayName = 'ReceiptBroken';
ReceiptBroken.inheritAttrs = false;
export default ReceiptBroken;