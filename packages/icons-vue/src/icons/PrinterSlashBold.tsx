// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PrinterSlashBoldSvg from '@ant-design/icons-svg/lib/asn/PrinterSlashBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PrinterSlashBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PrinterSlashBold: PrinterSlashBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PrinterSlashBoldSvg}></AntdIcon>;
};

PrinterSlashBold.displayName = 'PrinterSlashBold';
PrinterSlashBold.inheritAttrs = false;
export default PrinterSlashBold;