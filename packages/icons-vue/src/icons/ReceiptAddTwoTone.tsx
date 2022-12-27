// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ReceiptAddTwoToneSvg from '@ant-design/icons-svg/lib/asn/ReceiptAddTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ReceiptAddTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ReceiptAddTwoTone: ReceiptAddTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ReceiptAddTwoToneSvg}></AntdIcon>;
};

ReceiptAddTwoTone.displayName = 'ReceiptAddTwoTone';
ReceiptAddTwoTone.inheritAttrs = false;
export default ReceiptAddTwoTone;