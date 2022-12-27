// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VideoAddTwoToneSvg from '@ant-design/icons-svg/lib/asn/VideoAddTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VideoAddTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VideoAddTwoTone: VideoAddTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VideoAddTwoToneSvg}></AntdIcon>;
};

VideoAddTwoTone.displayName = 'VideoAddTwoTone';
VideoAddTwoTone.inheritAttrs = false;
export default VideoAddTwoTone;