// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ScanningBoldSvg from '@ant-design/icons-svg/lib/asn/ScanningBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ScanningBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ScanningBold: ScanningBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ScanningBoldSvg}></AntdIcon>;
};

ScanningBold.displayName = 'ScanningBold';
ScanningBold.inheritAttrs = false;
export default ScanningBold;