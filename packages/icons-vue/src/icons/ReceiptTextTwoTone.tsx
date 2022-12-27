// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ReceiptTextTwoToneSvg from '@ant-design/icons-svg/lib/asn/ReceiptTextTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ReceiptTextTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ReceiptTextTwoTone: ReceiptTextTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ReceiptTextTwoToneSvg}></AntdIcon>;
};

ReceiptTextTwoTone.displayName = 'ReceiptTextTwoTone';
ReceiptTextTwoTone.inheritAttrs = false;
export default ReceiptTextTwoTone;