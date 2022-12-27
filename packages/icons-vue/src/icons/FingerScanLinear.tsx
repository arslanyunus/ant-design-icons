// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FingerScanLinearSvg from '@ant-design/icons-svg/lib/asn/FingerScanLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FingerScanLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FingerScanLinear: FingerScanLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FingerScanLinearSvg}></AntdIcon>;
};

FingerScanLinear.displayName = 'FingerScanLinear';
FingerScanLinear.inheritAttrs = false;
export default FingerScanLinear;