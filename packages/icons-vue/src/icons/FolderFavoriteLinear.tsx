// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FolderFavoriteLinearSvg from '@ant-design/icons-svg/lib/asn/FolderFavoriteLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FolderFavoriteLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FolderFavoriteLinear: FolderFavoriteLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FolderFavoriteLinearSvg}></AntdIcon>;
};

FolderFavoriteLinear.displayName = 'FolderFavoriteLinear';
FolderFavoriteLinear.inheritAttrs = false;
export default FolderFavoriteLinear;