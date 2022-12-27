// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ReceiptTextBrokenSvg from '@ant-design/icons-svg/lib/asn/ReceiptTextBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ReceiptTextBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ReceiptTextBroken: ReceiptTextBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ReceiptTextBrokenSvg}></AntdIcon>;
};

ReceiptTextBroken.displayName = 'ReceiptTextBroken';
ReceiptTextBroken.inheritAttrs = false;
export default ReceiptTextBroken;