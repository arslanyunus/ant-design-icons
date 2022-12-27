// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VideoTickTwoToneSvg from '@ant-design/icons-svg/lib/asn/VideoTickTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VideoTickTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VideoTickTwoTone: VideoTickTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VideoTickTwoToneSvg}></AntdIcon>;
};

VideoTickTwoTone.displayName = 'VideoTickTwoTone';
VideoTickTwoTone.inheritAttrs = false;
export default VideoTickTwoTone;