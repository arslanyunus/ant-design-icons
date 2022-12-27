// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PrinterSlashBrokenSvg from '@ant-design/icons-svg/lib/asn/PrinterSlashBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PrinterSlashBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PrinterSlashBroken: PrinterSlashBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PrinterSlashBrokenSvg}></AntdIcon>;
};

PrinterSlashBroken.displayName = 'PrinterSlashBroken';
PrinterSlashBroken.inheritAttrs = false;
export default PrinterSlashBroken;