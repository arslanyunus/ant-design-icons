// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ReceiptAddOutlineSvg from '@ant-design/icons-svg/lib/asn/ReceiptAddOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ReceiptAddOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ReceiptAddOutline: ReceiptAddOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ReceiptAddOutlineSvg}></AntdIcon>;
};

ReceiptAddOutline.displayName = 'ReceiptAddOutline';
ReceiptAddOutline.inheritAttrs = false;
export default ReceiptAddOutline;