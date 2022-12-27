// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PrinterSlashTwoToneSvg from '@ant-design/icons-svg/lib/asn/PrinterSlashTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PrinterSlashTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PrinterSlashTwoTone: PrinterSlashTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PrinterSlashTwoToneSvg}></AntdIcon>;
};

PrinterSlashTwoTone.displayName = 'PrinterSlashTwoTone';
PrinterSlashTwoTone.inheritAttrs = false;
export default PrinterSlashTwoTone;