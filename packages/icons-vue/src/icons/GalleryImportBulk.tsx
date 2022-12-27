// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GalleryImportBulkSvg from '@ant-design/icons-svg/lib/asn/GalleryImportBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GalleryImportBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GalleryImportBulk: GalleryImportBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GalleryImportBulkSvg}></AntdIcon>;
};

GalleryImportBulk.displayName = 'GalleryImportBulk';
GalleryImportBulk.inheritAttrs = false;
export default GalleryImportBulk;