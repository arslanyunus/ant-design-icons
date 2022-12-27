// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VideoTwoToneSvg from '@ant-design/icons-svg/lib/asn/VideoTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VideoTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VideoTwoTone: VideoTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VideoTwoToneSvg}></AntdIcon>;
};

VideoTwoTone.displayName = 'VideoTwoTone';
VideoTwoTone.inheritAttrs = false;
export default VideoTwoTone;