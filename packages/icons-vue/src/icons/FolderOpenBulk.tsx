// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FolderOpenBulkSvg from '@ant-design/icons-svg/lib/asn/FolderOpenBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FolderOpenBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FolderOpenBulk: FolderOpenBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FolderOpenBulkSvg}></AntdIcon>;
};

FolderOpenBulk.displayName = 'FolderOpenBulk';
FolderOpenBulk.inheritAttrs = false;
export default FolderOpenBulk;