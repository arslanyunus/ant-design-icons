// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PrinterBoldSvg from '@ant-design/icons-svg/lib/asn/PrinterBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PrinterBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PrinterBold: PrinterBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PrinterBoldSvg}></AntdIcon>;
};

PrinterBold.displayName = 'PrinterBold';
PrinterBold.inheritAttrs = false;
export default PrinterBold;