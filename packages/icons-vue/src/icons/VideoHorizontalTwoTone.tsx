// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VideoHorizontalTwoToneSvg from '@ant-design/icons-svg/lib/asn/VideoHorizontalTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VideoHorizontalTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VideoHorizontalTwoTone: VideoHorizontalTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VideoHorizontalTwoToneSvg}></AntdIcon>;
};

VideoHorizontalTwoTone.displayName = 'VideoHorizontalTwoTone';
VideoHorizontalTwoTone.inheritAttrs = false;
export default VideoHorizontalTwoTone;