// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ScannerLinearSvg from '@ant-design/icons-svg/lib/asn/ScannerLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ScannerLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ScannerLinear: ScannerLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ScannerLinearSvg}></AntdIcon>;
};

ScannerLinear.displayName = 'ScannerLinear';
ScannerLinear.inheritAttrs = false;
export default ScannerLinear;