// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VideoCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/VideoCircleTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VideoCircleTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VideoCircleTwoTone: VideoCircleTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VideoCircleTwoToneSvg}></AntdIcon>;
};

VideoCircleTwoTone.displayName = 'VideoCircleTwoTone';
VideoCircleTwoTone.inheritAttrs = false;
export default VideoCircleTwoTone;