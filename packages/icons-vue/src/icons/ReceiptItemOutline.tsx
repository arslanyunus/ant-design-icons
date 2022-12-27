// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ReceiptItemOutlineSvg from '@ant-design/icons-svg/lib/asn/ReceiptItemOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ReceiptItemOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ReceiptItemOutline: ReceiptItemOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ReceiptItemOutlineSvg}></AntdIcon>;
};

ReceiptItemOutline.displayName = 'ReceiptItemOutline';
ReceiptItemOutline.inheritAttrs = false;
export default ReceiptItemOutline;