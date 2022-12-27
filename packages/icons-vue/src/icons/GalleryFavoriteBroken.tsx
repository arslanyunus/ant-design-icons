// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GalleryFavoriteBrokenSvg from '@ant-design/icons-svg/lib/asn/GalleryFavoriteBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GalleryFavoriteBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GalleryFavoriteBroken: GalleryFavoriteBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GalleryFavoriteBrokenSvg}></AntdIcon>;
};

GalleryFavoriteBroken.displayName = 'GalleryFavoriteBroken';
GalleryFavoriteBroken.inheritAttrs = false;
export default GalleryFavoriteBroken;