// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VideoHorizontalLinearSvg from '@ant-design/icons-svg/lib/asn/VideoHorizontalLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VideoHorizontalLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VideoHorizontalLinear: VideoHorizontalLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VideoHorizontalLinearSvg}></AntdIcon>;
};

VideoHorizontalLinear.displayName = 'VideoHorizontalLinear';
VideoHorizontalLinear.inheritAttrs = false;
export default VideoHorizontalLinear;