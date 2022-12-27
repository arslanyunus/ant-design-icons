// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VideoHorizontalOutlineSvg from '@ant-design/icons-svg/lib/asn/VideoHorizontalOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VideoHorizontalOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VideoHorizontalOutline: VideoHorizontalOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VideoHorizontalOutlineSvg}></AntdIcon>;
};

VideoHorizontalOutline.displayName = 'VideoHorizontalOutline';
VideoHorizontalOutline.inheritAttrs = false;
export default VideoHorizontalOutline;