// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ReceiptTextOutlineSvg from '@ant-design/icons-svg/lib/asn/ReceiptTextOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ReceiptTextOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ReceiptTextOutline: ReceiptTextOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ReceiptTextOutlineSvg}></AntdIcon>;
};

ReceiptTextOutline.displayName = 'ReceiptTextOutline';
ReceiptTextOutline.inheritAttrs = false;
export default ReceiptTextOutline;