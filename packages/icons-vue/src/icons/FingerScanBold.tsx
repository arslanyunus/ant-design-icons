// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FingerScanBoldSvg from '@ant-design/icons-svg/lib/asn/FingerScanBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FingerScanBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FingerScanBold: FingerScanBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FingerScanBoldSvg}></AntdIcon>;
};

FingerScanBold.displayName = 'FingerScanBold';
FingerScanBold.inheritAttrs = false;
export default FingerScanBold;