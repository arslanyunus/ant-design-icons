// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GalleryImportBrokenSvg from '@ant-design/icons-svg/lib/asn/GalleryImportBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GalleryImportBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GalleryImportBroken: GalleryImportBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GalleryImportBrokenSvg}></AntdIcon>;
};

GalleryImportBroken.displayName = 'GalleryImportBroken';
GalleryImportBroken.inheritAttrs = false;
export default GalleryImportBroken;