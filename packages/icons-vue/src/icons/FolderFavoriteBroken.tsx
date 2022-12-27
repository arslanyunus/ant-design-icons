// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FolderFavoriteBrokenSvg from '@ant-design/icons-svg/lib/asn/FolderFavoriteBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FolderFavoriteBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FolderFavoriteBroken: FolderFavoriteBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FolderFavoriteBrokenSvg}></AntdIcon>;
};

FolderFavoriteBroken.displayName = 'FolderFavoriteBroken';
FolderFavoriteBroken.inheritAttrs = false;
export default FolderFavoriteBroken;