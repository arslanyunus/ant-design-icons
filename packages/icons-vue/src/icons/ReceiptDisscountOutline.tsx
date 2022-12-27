// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ReceiptDisscountOutlineSvg from '@ant-design/icons-svg/lib/asn/ReceiptDisscountOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ReceiptDisscountOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ReceiptDisscountOutline: ReceiptDisscountOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ReceiptDisscountOutlineSvg}></AntdIcon>;
};

ReceiptDisscountOutline.displayName = 'ReceiptDisscountOutline';
ReceiptDisscountOutline.inheritAttrs = false;
export default ReceiptDisscountOutline;