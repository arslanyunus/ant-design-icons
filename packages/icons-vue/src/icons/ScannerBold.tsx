// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ScannerBoldSvg from '@ant-design/icons-svg/lib/asn/ScannerBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ScannerBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ScannerBold: ScannerBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ScannerBoldSvg}></AntdIcon>;
};

ScannerBold.displayName = 'ScannerBold';
ScannerBold.inheritAttrs = false;
export default ScannerBold;