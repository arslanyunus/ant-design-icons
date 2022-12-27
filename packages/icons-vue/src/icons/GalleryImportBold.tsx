// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GalleryImportBoldSvg from '@ant-design/icons-svg/lib/asn/GalleryImportBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GalleryImportBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GalleryImportBold: GalleryImportBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GalleryImportBoldSvg}></AntdIcon>;
};

GalleryImportBold.displayName = 'GalleryImportBold';
GalleryImportBold.inheritAttrs = false;
export default GalleryImportBold;