// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ReceiptTwoToneSvg from '@ant-design/icons-svg/lib/asn/ReceiptTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ReceiptTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ReceiptTwoTone: ReceiptTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ReceiptTwoToneSvg}></AntdIcon>;
};

ReceiptTwoTone.displayName = 'ReceiptTwoTone';
ReceiptTwoTone.inheritAttrs = false;
export default ReceiptTwoTone;