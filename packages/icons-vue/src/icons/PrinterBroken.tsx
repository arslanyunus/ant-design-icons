// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PrinterBrokenSvg from '@ant-design/icons-svg/lib/asn/PrinterBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PrinterBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PrinterBroken: PrinterBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PrinterBrokenSvg}></AntdIcon>;
};

PrinterBroken.displayName = 'PrinterBroken';
PrinterBroken.inheritAttrs = false;
export default PrinterBroken;