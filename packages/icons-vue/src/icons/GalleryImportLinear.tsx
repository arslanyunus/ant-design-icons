// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GalleryImportLinearSvg from '@ant-design/icons-svg/lib/asn/GalleryImportLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GalleryImportLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GalleryImportLinear: GalleryImportLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GalleryImportLinearSvg}></AntdIcon>;
};

GalleryImportLinear.displayName = 'GalleryImportLinear';
GalleryImportLinear.inheritAttrs = false;
export default GalleryImportLinear;