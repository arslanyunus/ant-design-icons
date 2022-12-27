// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FolderCrossBulkSvg from '@ant-design/icons-svg/lib/asn/FolderCrossBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FolderCrossBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FolderCrossBulk: FolderCrossBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FolderCrossBulkSvg}></AntdIcon>;
};

FolderCrossBulk.displayName = 'FolderCrossBulk';
FolderCrossBulk.inheritAttrs = false;
export default FolderCrossBulk;