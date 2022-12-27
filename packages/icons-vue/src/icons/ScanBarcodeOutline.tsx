// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ScanBarcodeOutlineSvg from '@ant-design/icons-svg/lib/asn/ScanBarcodeOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ScanBarcodeOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ScanBarcodeOutline: ScanBarcodeOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ScanBarcodeOutlineSvg}></AntdIcon>;
};

ScanBarcodeOutline.displayName = 'ScanBarcodeOutline';
ScanBarcodeOutline.inheritAttrs = false;
export default ScanBarcodeOutline;