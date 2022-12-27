// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ReceiptDisscountBrokenSvg from '@ant-design/icons-svg/lib/asn/ReceiptDisscountBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ReceiptDisscountBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ReceiptDisscountBroken: ReceiptDisscountBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ReceiptDisscountBrokenSvg}></AntdIcon>;
};

ReceiptDisscountBroken.displayName = 'ReceiptDisscountBroken';
ReceiptDisscountBroken.inheritAttrs = false;
export default ReceiptDisscountBroken;