// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ScanningLinearSvg from '@ant-design/icons-svg/lib/asn/ScanningLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ScanningLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ScanningLinear: ScanningLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ScanningLinearSvg}></AntdIcon>;
};

ScanningLinear.displayName = 'ScanningLinear';
ScanningLinear.inheritAttrs = false;
export default ScanningLinear;