// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ScanLinearSvg from '@ant-design/icons-svg/lib/asn/ScanLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ScanLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ScanLinear: ScanLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ScanLinearSvg}></AntdIcon>;
};

ScanLinear.displayName = 'ScanLinear';
ScanLinear.inheritAttrs = false;
export default ScanLinear;