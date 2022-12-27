// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FingerScanBrokenSvg from '@ant-design/icons-svg/lib/asn/FingerScanBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FingerScanBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FingerScanBroken: FingerScanBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FingerScanBrokenSvg}></AntdIcon>;
};

FingerScanBroken.displayName = 'FingerScanBroken';
FingerScanBroken.inheritAttrs = false;
export default FingerScanBroken;