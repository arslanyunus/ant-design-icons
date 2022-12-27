// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GalleryTickTwoToneSvg from '@ant-design/icons-svg/lib/asn/GalleryTickTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GalleryTickTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GalleryTickTwoTone: GalleryTickTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GalleryTickTwoToneSvg}></AntdIcon>;
};

GalleryTickTwoTone.displayName = 'GalleryTickTwoTone';
GalleryTickTwoTone.inheritAttrs = false;
export default GalleryTickTwoTone;