// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ScanBulkSvg from '@ant-design/icons-svg/lib/asn/ScanBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ScanBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ScanBulk: ScanBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ScanBulkSvg}></AntdIcon>;
};

ScanBulk.displayName = 'ScanBulk';
ScanBulk.inheritAttrs = false;
export default ScanBulk;