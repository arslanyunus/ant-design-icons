// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArchiveBookBulkSvg from '@ant-design/icons-svg/lib/asn/ArchiveBookBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArchiveBookBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArchiveBookBulk: ArchiveBookBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArchiveBookBulkSvg}></AntdIcon>;
};

ArchiveBookBulk.displayName = 'ArchiveBookBulk';
ArchiveBookBulk.inheritAttrs = false;
export default ArchiveBookBulk;