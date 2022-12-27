// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ScanBarcodeLinearSvg from '@ant-design/icons-svg/lib/asn/ScanBarcodeLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ScanBarcodeLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ScanBarcodeLinear: ScanBarcodeLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ScanBarcodeLinearSvg}></AntdIcon>;
};

ScanBarcodeLinear.displayName = 'ScanBarcodeLinear';
ScanBarcodeLinear.inheritAttrs = false;
export default ScanBarcodeLinear;