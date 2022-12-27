// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PrinterOutlineSvg from '@ant-design/icons-svg/lib/asn/PrinterOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PrinterOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PrinterOutline: PrinterOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PrinterOutlineSvg}></AntdIcon>;
};

PrinterOutline.displayName = 'PrinterOutline';
PrinterOutline.inheritAttrs = false;
export default PrinterOutline;