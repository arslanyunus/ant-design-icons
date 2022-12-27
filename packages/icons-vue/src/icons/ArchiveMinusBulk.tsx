// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArchiveMinusBulkSvg from '@ant-design/icons-svg/lib/asn/ArchiveMinusBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArchiveMinusBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArchiveMinusBulk: ArchiveMinusBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArchiveMinusBulkSvg}></AntdIcon>;
};

ArchiveMinusBulk.displayName = 'ArchiveMinusBulk';
ArchiveMinusBulk.inheritAttrs = false;
export default ArchiveMinusBulk;