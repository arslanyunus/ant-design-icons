// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArchiveAddBulkSvg from '@ant-design/icons-svg/lib/asn/ArchiveAddBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArchiveAddBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArchiveAddBulk: ArchiveAddBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArchiveAddBulkSvg}></AntdIcon>;
};

ArchiveAddBulk.displayName = 'ArchiveAddBulk';
ArchiveAddBulk.inheritAttrs = false;
export default ArchiveAddBulk;