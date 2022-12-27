// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GalleryFavoriteBoldSvg from '@ant-design/icons-svg/lib/asn/GalleryFavoriteBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GalleryFavoriteBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GalleryFavoriteBold: GalleryFavoriteBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GalleryFavoriteBoldSvg}></AntdIcon>;
};

GalleryFavoriteBold.displayName = 'GalleryFavoriteBold';
GalleryFavoriteBold.inheritAttrs = false;
export default GalleryFavoriteBold;