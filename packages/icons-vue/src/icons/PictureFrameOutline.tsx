// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PictureFrameOutlineSvg from '@ant-design/icons-svg/lib/asn/PictureFrameOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PictureFrameOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PictureFrameOutline: PictureFrameOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PictureFrameOutlineSvg}></AntdIcon>;
};

PictureFrameOutline.displayName = 'PictureFrameOutline';
PictureFrameOutline.inheritAttrs = false;
export default PictureFrameOutline;