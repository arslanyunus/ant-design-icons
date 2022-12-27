// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GalleryImportOutlineSvg from '@ant-design/icons-svg/lib/asn/GalleryImportOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GalleryImportOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GalleryImportOutline: GalleryImportOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GalleryImportOutlineSvg}></AntdIcon>;
};

GalleryImportOutline.displayName = 'GalleryImportOutline';
GalleryImportOutline.inheritAttrs = false;
export default GalleryImportOutline;