// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VideoPlayBoldSvg from '@ant-design/icons-svg/lib/asn/VideoPlayBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VideoPlayBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VideoPlayBold: VideoPlayBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VideoPlayBoldSvg}></AntdIcon>;
};

VideoPlayBold.displayName = 'VideoPlayBold';
VideoPlayBold.inheritAttrs = false;
export default VideoPlayBold;