// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ImageBulkSvg from '@ant-design/icons-svg/lib/asn/ImageBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ImageBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ImageBulk: ImageBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ImageBulkSvg}></AntdIcon>;
};

ImageBulk.displayName = 'ImageBulk';
ImageBulk.inheritAttrs = false;
export default ImageBulk;