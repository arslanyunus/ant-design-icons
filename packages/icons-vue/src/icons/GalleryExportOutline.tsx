// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GalleryExportOutlineSvg from '@ant-design/icons-svg/lib/asn/GalleryExportOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GalleryExportOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GalleryExportOutline: GalleryExportOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GalleryExportOutlineSvg}></AntdIcon>;
};

GalleryExportOutline.displayName = 'GalleryExportOutline';
GalleryExportOutline.inheritAttrs = false;
export default GalleryExportOutline;