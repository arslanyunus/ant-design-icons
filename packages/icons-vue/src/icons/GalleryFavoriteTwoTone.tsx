// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GalleryFavoriteTwoToneSvg from '@ant-design/icons-svg/lib/asn/GalleryFavoriteTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GalleryFavoriteTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GalleryFavoriteTwoTone: GalleryFavoriteTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GalleryFavoriteTwoToneSvg}></AntdIcon>;
};

GalleryFavoriteTwoTone.displayName = 'GalleryFavoriteTwoTone';
GalleryFavoriteTwoTone.inheritAttrs = false;
export default GalleryFavoriteTwoTone;