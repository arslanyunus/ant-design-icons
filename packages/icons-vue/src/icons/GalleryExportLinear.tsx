// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GalleryExportLinearSvg from '@ant-design/icons-svg/lib/asn/GalleryExportLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GalleryExportLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GalleryExportLinear: GalleryExportLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GalleryExportLinearSvg}></AntdIcon>;
};

GalleryExportLinear.displayName = 'GalleryExportLinear';
GalleryExportLinear.inheritAttrs = false;
export default GalleryExportLinear;