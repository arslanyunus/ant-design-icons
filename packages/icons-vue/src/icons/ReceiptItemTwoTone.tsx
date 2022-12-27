// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ReceiptItemTwoToneSvg from '@ant-design/icons-svg/lib/asn/ReceiptItemTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ReceiptItemTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ReceiptItemTwoTone: ReceiptItemTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ReceiptItemTwoToneSvg}></AntdIcon>;
};

ReceiptItemTwoTone.displayName = 'ReceiptItemTwoTone';
ReceiptItemTwoTone.inheritAttrs = false;
export default ReceiptItemTwoTone;