// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ReceiptSquareTwoToneSvg from '@ant-design/icons-svg/lib/asn/ReceiptSquareTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ReceiptSquareTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ReceiptSquareTwoTone: ReceiptSquareTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ReceiptSquareTwoToneSvg}></AntdIcon>;
};

ReceiptSquareTwoTone.displayName = 'ReceiptSquareTwoTone';
ReceiptSquareTwoTone.inheritAttrs = false;
export default ReceiptSquareTwoTone;