// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ScannerBrokenSvg from '@ant-design/icons-svg/lib/asn/ScannerBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ScannerBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ScannerBroken: ScannerBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ScannerBrokenSvg}></AntdIcon>;
};

ScannerBroken.displayName = 'ScannerBroken';
ScannerBroken.inheritAttrs = false;
export default ScannerBroken;