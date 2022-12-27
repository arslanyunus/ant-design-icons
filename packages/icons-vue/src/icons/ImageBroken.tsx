// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ImageBrokenSvg from '@ant-design/icons-svg/lib/asn/ImageBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ImageBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ImageBroken: ImageBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ImageBrokenSvg}></AntdIcon>;
};

ImageBroken.displayName = 'ImageBroken';
ImageBroken.inheritAttrs = false;
export default ImageBroken;