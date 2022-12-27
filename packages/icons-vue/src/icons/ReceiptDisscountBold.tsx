// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ReceiptDisscountBoldSvg from '@ant-design/icons-svg/lib/asn/ReceiptDisscountBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ReceiptDisscountBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ReceiptDisscountBold: ReceiptDisscountBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ReceiptDisscountBoldSvg}></AntdIcon>;
};

ReceiptDisscountBold.displayName = 'ReceiptDisscountBold';
ReceiptDisscountBold.inheritAttrs = false;
export default ReceiptDisscountBold;