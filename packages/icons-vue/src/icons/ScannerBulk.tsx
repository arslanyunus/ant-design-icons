// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ScannerBulkSvg from '@ant-design/icons-svg/lib/asn/ScannerBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ScannerBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ScannerBulk: ScannerBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ScannerBulkSvg}></AntdIcon>;
};

ScannerBulk.displayName = 'ScannerBulk';
ScannerBulk.inheritAttrs = false;
export default ScannerBulk;