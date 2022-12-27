// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ScanningBrokenSvg from '@ant-design/icons-svg/lib/asn/ScanningBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ScanningBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ScanningBroken: ScanningBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ScanningBrokenSvg}></AntdIcon>;
};

ScanningBroken.displayName = 'ScanningBroken';
ScanningBroken.inheritAttrs = false;
export default ScanningBroken;