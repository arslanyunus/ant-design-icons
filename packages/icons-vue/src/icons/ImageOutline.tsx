// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ImageOutlineSvg from '@ant-design/icons-svg/lib/asn/ImageOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ImageOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ImageOutline: ImageOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ImageOutlineSvg}></AntdIcon>;
};

ImageOutline.displayName = 'ImageOutline';
ImageOutline.inheritAttrs = false;
export default ImageOutline;