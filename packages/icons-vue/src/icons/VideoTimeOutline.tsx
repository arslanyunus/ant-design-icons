// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VideoTimeOutlineSvg from '@ant-design/icons-svg/lib/asn/VideoTimeOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VideoTimeOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VideoTimeOutline: VideoTimeOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VideoTimeOutlineSvg}></AntdIcon>;
};

VideoTimeOutline.displayName = 'VideoTimeOutline';
VideoTimeOutline.inheritAttrs = false;
export default VideoTimeOutline;