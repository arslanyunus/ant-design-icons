// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VideoTickBoldSvg from '@ant-design/icons-svg/lib/asn/VideoTickBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VideoTickBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VideoTickBold: VideoTickBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VideoTickBoldSvg}></AntdIcon>;
};

VideoTickBold.displayName = 'VideoTickBold';
VideoTickBold.inheritAttrs = false;
export default VideoTickBold;