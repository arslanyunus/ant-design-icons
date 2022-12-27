// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArchiveBulkSvg from '@ant-design/icons-svg/lib/asn/ArchiveBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArchiveBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArchiveBulk: ArchiveBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArchiveBulkSvg}></AntdIcon>;
};

ArchiveBulk.displayName = 'ArchiveBulk';
ArchiveBulk.inheritAttrs = false;
export default ArchiveBulk;