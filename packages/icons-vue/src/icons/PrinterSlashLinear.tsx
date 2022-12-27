// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PrinterSlashLinearSvg from '@ant-design/icons-svg/lib/asn/PrinterSlashLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PrinterSlashLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PrinterSlashLinear: PrinterSlashLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PrinterSlashLinearSvg}></AntdIcon>;
};

PrinterSlashLinear.displayName = 'PrinterSlashLinear';
PrinterSlashLinear.inheritAttrs = false;
export default PrinterSlashLinear;