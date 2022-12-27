// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VideoRemoveOutlineSvg from '@ant-design/icons-svg/lib/asn/VideoRemoveOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VideoRemoveOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VideoRemoveOutline: VideoRemoveOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VideoRemoveOutlineSvg}></AntdIcon>;
};

VideoRemoveOutline.displayName = 'VideoRemoveOutline';
VideoRemoveOutline.inheritAttrs = false;
export default VideoRemoveOutline;