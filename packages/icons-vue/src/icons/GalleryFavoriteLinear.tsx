// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GalleryFavoriteLinearSvg from '@ant-design/icons-svg/lib/asn/GalleryFavoriteLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GalleryFavoriteLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GalleryFavoriteLinear: GalleryFavoriteLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GalleryFavoriteLinearSvg}></AntdIcon>;
};

GalleryFavoriteLinear.displayName = 'GalleryFavoriteLinear';
GalleryFavoriteLinear.inheritAttrs = false;
export default GalleryFavoriteLinear;