// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ImageBoldSvg from '@ant-design/icons-svg/lib/asn/ImageBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ImageBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ImageBold: ImageBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ImageBoldSvg}></AntdIcon>;
};

ImageBold.displayName = 'ImageBold';
ImageBold.inheritAttrs = false;
export default ImageBold;