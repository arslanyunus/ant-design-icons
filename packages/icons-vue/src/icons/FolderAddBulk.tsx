// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FolderAddBulkSvg from '@ant-design/icons-svg/lib/asn/FolderAddBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FolderAddBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FolderAddBulk: FolderAddBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FolderAddBulkSvg}></AntdIcon>;
};

FolderAddBulk.displayName = 'FolderAddBulk';
FolderAddBulk.inheritAttrs = false;
export default FolderAddBulk;