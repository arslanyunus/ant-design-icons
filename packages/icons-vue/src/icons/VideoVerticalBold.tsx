// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VideoVerticalBoldSvg from '@ant-design/icons-svg/lib/asn/VideoVerticalBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VideoVerticalBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VideoVerticalBold: VideoVerticalBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VideoVerticalBoldSvg}></AntdIcon>;
};

VideoVerticalBold.displayName = 'VideoVerticalBold';
VideoVerticalBold.inheritAttrs = false;
export default VideoVerticalBold;