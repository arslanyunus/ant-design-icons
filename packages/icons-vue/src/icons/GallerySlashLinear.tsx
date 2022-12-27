// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GallerySlashLinearSvg from '@ant-design/icons-svg/lib/asn/GallerySlashLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GallerySlashLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GallerySlashLinear: GallerySlashLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GallerySlashLinearSvg}></AntdIcon>;
};

GallerySlashLinear.displayName = 'GallerySlashLinear';
GallerySlashLinear.inheritAttrs = false;
export default GallerySlashLinear;