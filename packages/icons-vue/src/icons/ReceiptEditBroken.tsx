// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ReceiptEditBrokenSvg from '@ant-design/icons-svg/lib/asn/ReceiptEditBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ReceiptEditBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ReceiptEditBroken: ReceiptEditBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ReceiptEditBrokenSvg}></AntdIcon>;
};

ReceiptEditBroken.displayName = 'ReceiptEditBroken';
ReceiptEditBroken.inheritAttrs = false;
export default ReceiptEditBroken;