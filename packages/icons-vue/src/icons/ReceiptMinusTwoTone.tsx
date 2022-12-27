// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ReceiptMinusTwoToneSvg from '@ant-design/icons-svg/lib/asn/ReceiptMinusTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ReceiptMinusTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ReceiptMinusTwoTone: ReceiptMinusTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ReceiptMinusTwoToneSvg}></AntdIcon>;
};

ReceiptMinusTwoTone.displayName = 'ReceiptMinusTwoTone';
ReceiptMinusTwoTone.inheritAttrs = false;
export default ReceiptMinusTwoTone;