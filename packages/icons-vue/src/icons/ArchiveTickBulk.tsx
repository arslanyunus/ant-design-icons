// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArchiveTickBulkSvg from '@ant-design/icons-svg/lib/asn/ArchiveTickBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArchiveTickBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArchiveTickBulk: ArchiveTickBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArchiveTickBulkSvg}></AntdIcon>;
};

ArchiveTickBulk.displayName = 'ArchiveTickBulk';
ArchiveTickBulk.inheritAttrs = false;
export default ArchiveTickBulk;