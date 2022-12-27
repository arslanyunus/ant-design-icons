// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FolderFavoriteOutlineSvg from '@ant-design/icons-svg/lib/asn/FolderFavoriteOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FolderFavoriteOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FolderFavoriteOutline: FolderFavoriteOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FolderFavoriteOutlineSvg}></AntdIcon>;
};

FolderFavoriteOutline.displayName = 'FolderFavoriteOutline';
FolderFavoriteOutline.inheritAttrs = false;
export default FolderFavoriteOutline;