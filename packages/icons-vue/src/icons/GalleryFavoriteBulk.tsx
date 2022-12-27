// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GalleryFavoriteBulkSvg from '@ant-design/icons-svg/lib/asn/GalleryFavoriteBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GalleryFavoriteBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GalleryFavoriteBulk: GalleryFavoriteBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GalleryFavoriteBulkSvg}></AntdIcon>;
};

GalleryFavoriteBulk.displayName = 'GalleryFavoriteBulk';
GalleryFavoriteBulk.inheritAttrs = false;
export default GalleryFavoriteBulk;