// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FolderMinusBulkSvg from '@ant-design/icons-svg/lib/asn/FolderMinusBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FolderMinusBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FolderMinusBulk: FolderMinusBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FolderMinusBulkSvg}></AntdIcon>;
};

FolderMinusBulk.displayName = 'FolderMinusBulk';
FolderMinusBulk.inheritAttrs = false;
export default FolderMinusBulk;