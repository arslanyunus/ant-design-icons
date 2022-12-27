// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PrinterLinearSvg from '@ant-design/icons-svg/lib/asn/PrinterLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PrinterLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PrinterLinear: PrinterLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PrinterLinearSvg}></AntdIcon>;
};

PrinterLinear.displayName = 'PrinterLinear';
PrinterLinear.inheritAttrs = false;
export default PrinterLinear;