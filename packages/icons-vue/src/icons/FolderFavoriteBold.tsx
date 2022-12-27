// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FolderFavoriteBoldSvg from '@ant-design/icons-svg/lib/asn/FolderFavoriteBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FolderFavoriteBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FolderFavoriteBold: FolderFavoriteBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FolderFavoriteBoldSvg}></AntdIcon>;
};

FolderFavoriteBold.displayName = 'FolderFavoriteBold';
FolderFavoriteBold.inheritAttrs = false;
export default FolderFavoriteBold;