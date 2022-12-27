// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VideoPlayTwoToneSvg from '@ant-design/icons-svg/lib/asn/VideoPlayTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VideoPlayTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VideoPlayTwoTone: VideoPlayTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VideoPlayTwoToneSvg}></AntdIcon>;
};

VideoPlayTwoTone.displayName = 'VideoPlayTwoTone';
VideoPlayTwoTone.inheritAttrs = false;
export default VideoPlayTwoTone;