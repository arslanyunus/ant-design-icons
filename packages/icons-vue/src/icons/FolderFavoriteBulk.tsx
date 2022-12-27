// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FolderFavoriteBulkSvg from '@ant-design/icons-svg/lib/asn/FolderFavoriteBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FolderFavoriteBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FolderFavoriteBulk: FolderFavoriteBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FolderFavoriteBulkSvg}></AntdIcon>;
};

FolderFavoriteBulk.displayName = 'FolderFavoriteBulk';
FolderFavoriteBulk.inheritAttrs = false;
export default FolderFavoriteBulk;