// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VideoRemoveBrokenSvg from '@ant-design/icons-svg/lib/asn/VideoRemoveBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VideoRemoveBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VideoRemoveBroken: VideoRemoveBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VideoRemoveBrokenSvg}></AntdIcon>;
};

VideoRemoveBroken.displayName = 'VideoRemoveBroken';
VideoRemoveBroken.inheritAttrs = false;
export default VideoRemoveBroken;