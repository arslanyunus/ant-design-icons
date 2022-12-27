// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ReceiptEditTwoToneSvg from '@ant-design/icons-svg/lib/asn/ReceiptEditTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ReceiptEditTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ReceiptEditTwoTone: ReceiptEditTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ReceiptEditTwoToneSvg}></AntdIcon>;
};

ReceiptEditTwoTone.displayName = 'ReceiptEditTwoTone';
ReceiptEditTwoTone.inheritAttrs = false;
export default ReceiptEditTwoTone;