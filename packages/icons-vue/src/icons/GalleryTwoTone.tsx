// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GalleryTwoToneSvg from '@ant-design/icons-svg/lib/asn/GalleryTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GalleryTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GalleryTwoTone: GalleryTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GalleryTwoToneSvg}></AntdIcon>;
};

GalleryTwoTone.displayName = 'GalleryTwoTone';
GalleryTwoTone.inheritAttrs = false;
export default GalleryTwoTone;