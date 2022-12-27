// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FingerScanBulkSvg from '@ant-design/icons-svg/lib/asn/FingerScanBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FingerScanBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FingerScanBulk: FingerScanBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FingerScanBulkSvg}></AntdIcon>;
};

FingerScanBulk.displayName = 'FingerScanBulk';
FingerScanBulk.inheritAttrs = false;
export default FingerScanBulk;