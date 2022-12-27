// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ScanBarcodeBulkSvg from '@ant-design/icons-svg/lib/asn/ScanBarcodeBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ScanBarcodeBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ScanBarcodeBulk: ScanBarcodeBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ScanBarcodeBulkSvg}></AntdIcon>;
};

ScanBarcodeBulk.displayName = 'ScanBarcodeBulk';
ScanBarcodeBulk.inheritAttrs = false;
export default ScanBarcodeBulk;