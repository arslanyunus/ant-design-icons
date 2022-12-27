// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ReceiptSearchOutlineSvg from '@ant-design/icons-svg/lib/asn/ReceiptSearchOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ReceiptSearchOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ReceiptSearchOutline: ReceiptSearchOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ReceiptSearchOutlineSvg}></AntdIcon>;
};

ReceiptSearchOutline.displayName = 'ReceiptSearchOutline';
ReceiptSearchOutline.inheritAttrs = false;
export default ReceiptSearchOutline;