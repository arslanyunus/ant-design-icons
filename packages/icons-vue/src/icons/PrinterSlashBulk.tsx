// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PrinterSlashBulkSvg from '@ant-design/icons-svg/lib/asn/PrinterSlashBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PrinterSlashBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PrinterSlashBulk: PrinterSlashBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PrinterSlashBulkSvg}></AntdIcon>;
};

PrinterSlashBulk.displayName = 'PrinterSlashBulk';
PrinterSlashBulk.inheritAttrs = false;
export default PrinterSlashBulk;