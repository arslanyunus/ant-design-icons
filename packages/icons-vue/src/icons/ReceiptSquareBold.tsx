// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ReceiptSquareBoldSvg from '@ant-design/icons-svg/lib/asn/ReceiptSquareBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ReceiptSquareBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ReceiptSquareBold: ReceiptSquareBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ReceiptSquareBoldSvg}></AntdIcon>;
};

ReceiptSquareBold.displayName = 'ReceiptSquareBold';
ReceiptSquareBold.inheritAttrs = false;
export default ReceiptSquareBold;