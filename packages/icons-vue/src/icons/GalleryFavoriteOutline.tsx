// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GalleryFavoriteOutlineSvg from '@ant-design/icons-svg/lib/asn/GalleryFavoriteOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GalleryFavoriteOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GalleryFavoriteOutline: GalleryFavoriteOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GalleryFavoriteOutlineSvg}></AntdIcon>;
};

GalleryFavoriteOutline.displayName = 'GalleryFavoriteOutline';
GalleryFavoriteOutline.inheritAttrs = false;
export default GalleryFavoriteOutline;