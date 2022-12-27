// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ReceiptSquareOutlineSvg from '@ant-design/icons-svg/lib/asn/ReceiptSquareOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ReceiptSquareOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ReceiptSquareOutline: ReceiptSquareOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ReceiptSquareOutlineSvg}></AntdIcon>;
};

ReceiptSquareOutline.displayName = 'ReceiptSquareOutline';
ReceiptSquareOutline.inheritAttrs = false;
export default ReceiptSquareOutline;