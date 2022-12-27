// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ScanningBulkSvg from '@ant-design/icons-svg/lib/asn/ScanningBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ScanningBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ScanningBulk: ScanningBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ScanningBulkSvg}></AntdIcon>;
};

ScanningBulk.displayName = 'ScanningBulk';
ScanningBulk.inheritAttrs = false;
export default ScanningBulk;