// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PrinterSlashOutlineSvg from '@ant-design/icons-svg/lib/asn/PrinterSlashOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PrinterSlashOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PrinterSlashOutline: PrinterSlashOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PrinterSlashOutlineSvg}></AntdIcon>;
};

PrinterSlashOutline.displayName = 'PrinterSlashOutline';
PrinterSlashOutline.inheritAttrs = false;
export default PrinterSlashOutline;