// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FingerScanOutlineSvg from '@ant-design/icons-svg/lib/asn/FingerScanOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FingerScanOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FingerScanOutline: FingerScanOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FingerScanOutlineSvg}></AntdIcon>;
};

FingerScanOutline.displayName = 'FingerScanOutline';
FingerScanOutline.inheritAttrs = false;
export default FingerScanOutline;