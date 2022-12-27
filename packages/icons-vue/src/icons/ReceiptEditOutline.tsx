// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ReceiptEditOutlineSvg from '@ant-design/icons-svg/lib/asn/ReceiptEditOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ReceiptEditOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ReceiptEditOutline: ReceiptEditOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ReceiptEditOutlineSvg}></AntdIcon>;
};

ReceiptEditOutline.displayName = 'ReceiptEditOutline';
ReceiptEditOutline.inheritAttrs = false;
export default ReceiptEditOutline;