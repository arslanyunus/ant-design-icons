// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ReceiptSearchBrokenSvg from '@ant-design/icons-svg/lib/asn/ReceiptSearchBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ReceiptSearchBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ReceiptSearchBroken: ReceiptSearchBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ReceiptSearchBrokenSvg}></AntdIcon>;
};

ReceiptSearchBroken.displayName = 'ReceiptSearchBroken';
ReceiptSearchBroken.inheritAttrs = false;
export default ReceiptSearchBroken;