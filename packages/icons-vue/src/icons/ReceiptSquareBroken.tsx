// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ReceiptSquareBrokenSvg from '@ant-design/icons-svg/lib/asn/ReceiptSquareBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ReceiptSquareBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ReceiptSquareBroken: ReceiptSquareBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ReceiptSquareBrokenSvg}></AntdIcon>;
};

ReceiptSquareBroken.displayName = 'ReceiptSquareBroken';
ReceiptSquareBroken.inheritAttrs = false;
export default ReceiptSquareBroken;