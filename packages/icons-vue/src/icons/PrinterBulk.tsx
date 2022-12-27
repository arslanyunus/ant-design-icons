// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PrinterBulkSvg from '@ant-design/icons-svg/lib/asn/PrinterBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PrinterBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PrinterBulk: PrinterBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PrinterBulkSvg}></AntdIcon>;
};

PrinterBulk.displayName = 'PrinterBulk';
PrinterBulk.inheritAttrs = false;
export default PrinterBulk;