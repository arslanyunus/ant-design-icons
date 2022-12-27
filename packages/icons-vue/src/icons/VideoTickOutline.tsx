// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VideoTickOutlineSvg from '@ant-design/icons-svg/lib/asn/VideoTickOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VideoTickOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VideoTickOutline: VideoTickOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VideoTickOutlineSvg}></AntdIcon>;
};

VideoTickOutline.displayName = 'VideoTickOutline';
VideoTickOutline.inheritAttrs = false;
export default VideoTickOutline;