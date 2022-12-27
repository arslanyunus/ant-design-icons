// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VideoCircleBoldSvg from '@ant-design/icons-svg/lib/asn/VideoCircleBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VideoCircleBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VideoCircleBold: VideoCircleBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VideoCircleBoldSvg}></AntdIcon>;
};

VideoCircleBold.displayName = 'VideoCircleBold';
VideoCircleBold.inheritAttrs = false;
export default VideoCircleBold;