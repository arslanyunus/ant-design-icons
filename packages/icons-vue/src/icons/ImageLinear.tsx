// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ImageLinearSvg from '@ant-design/icons-svg/lib/asn/ImageLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ImageLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ImageLinear: ImageLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ImageLinearSvg}></AntdIcon>;
};

ImageLinear.displayName = 'ImageLinear';
ImageLinear.inheritAttrs = false;
export default ImageLinear;