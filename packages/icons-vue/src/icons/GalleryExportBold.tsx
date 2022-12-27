// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GalleryExportBoldSvg from '@ant-design/icons-svg/lib/asn/GalleryExportBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GalleryExportBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GalleryExportBold: GalleryExportBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GalleryExportBoldSvg}></AntdIcon>;
};

GalleryExportBold.displayName = 'GalleryExportBold';
GalleryExportBold.inheritAttrs = false;
export default GalleryExportBold;