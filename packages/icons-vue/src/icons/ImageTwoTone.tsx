// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ImageTwoToneSvg from '@ant-design/icons-svg/lib/asn/ImageTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ImageTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ImageTwoTone: ImageTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ImageTwoToneSvg}></AntdIcon>;
};

ImageTwoTone.displayName = 'ImageTwoTone';
ImageTwoTone.inheritAttrs = false;
export default ImageTwoTone;