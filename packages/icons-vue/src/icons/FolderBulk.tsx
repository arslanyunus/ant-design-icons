// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FolderBulkSvg from '@ant-design/icons-svg/lib/asn/FolderBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FolderBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FolderBulk: FolderBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FolderBulkSvg}></AntdIcon>;
};

FolderBulk.displayName = 'FolderBulk';
FolderBulk.inheritAttrs = false;
export default FolderBulk;