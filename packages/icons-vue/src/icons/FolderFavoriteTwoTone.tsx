// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FolderFavoriteTwoToneSvg from '@ant-design/icons-svg/lib/asn/FolderFavoriteTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FolderFavoriteTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FolderFavoriteTwoTone: FolderFavoriteTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FolderFavoriteTwoToneSvg}></AntdIcon>;
};

FolderFavoriteTwoTone.displayName = 'FolderFavoriteTwoTone';
FolderFavoriteTwoTone.inheritAttrs = false;
export default FolderFavoriteTwoTone;