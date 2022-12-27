// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ReceiptOutlineSvg from '@ant-design/icons-svg/lib/asn/ReceiptOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ReceiptOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ReceiptOutline: ReceiptOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ReceiptOutlineSvg}></AntdIcon>;
};

ReceiptOutline.displayName = 'ReceiptOutline';
ReceiptOutline.inheritAttrs = false;
export default ReceiptOutline;