// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FolderConnectionBulkSvg from '@ant-design/icons-svg/lib/asn/FolderConnectionBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FolderConnectionBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FolderConnectionBulk: FolderConnectionBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FolderConnectionBulkSvg}></AntdIcon>;
};

FolderConnectionBulk.displayName = 'FolderConnectionBulk';
FolderConnectionBulk.inheritAttrs = false;
export default FolderConnectionBulk;