// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ReceiptAddBrokenSvg from '@ant-design/icons-svg/lib/asn/ReceiptAddBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ReceiptAddBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ReceiptAddBroken: ReceiptAddBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ReceiptAddBrokenSvg}></AntdIcon>;
};

ReceiptAddBroken.displayName = 'ReceiptAddBroken';
ReceiptAddBroken.inheritAttrs = false;
export default ReceiptAddBroken;