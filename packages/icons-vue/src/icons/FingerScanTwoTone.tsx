// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FingerScanTwoToneSvg from '@ant-design/icons-svg/lib/asn/FingerScanTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FingerScanTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FingerScanTwoTone: FingerScanTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FingerScanTwoToneSvg}></AntdIcon>;
};

FingerScanTwoTone.displayName = 'FingerScanTwoTone';
FingerScanTwoTone.inheritAttrs = false;
export default FingerScanTwoTone;