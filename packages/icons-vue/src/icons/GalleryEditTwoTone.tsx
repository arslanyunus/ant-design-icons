// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GalleryEditTwoToneSvg from '@ant-design/icons-svg/lib/asn/GalleryEditTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GalleryEditTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GalleryEditTwoTone: GalleryEditTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GalleryEditTwoToneSvg}></AntdIcon>;
};

GalleryEditTwoTone.displayName = 'GalleryEditTwoTone';
GalleryEditTwoTone.inheritAttrs = false;
export default GalleryEditTwoTone;