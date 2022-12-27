// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VideoVerticalTwoToneSvg from '@ant-design/icons-svg/lib/asn/VideoVerticalTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VideoVerticalTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VideoVerticalTwoTone: VideoVerticalTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VideoVerticalTwoToneSvg}></AntdIcon>;
};

VideoVerticalTwoTone.displayName = 'VideoVerticalTwoTone';
VideoVerticalTwoTone.inheritAttrs = false;
export default VideoVerticalTwoTone;