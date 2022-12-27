// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PlayCircleBrokenSvg from '@ant-design/icons-svg/lib/asn/PlayCircleBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PlayCircleBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PlayCircleBroken: PlayCircleBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PlayCircleBrokenSvg}></AntdIcon>;
};

PlayCircleBroken.displayName = 'PlayCircleBroken';
PlayCircleBroken.inheritAttrs = false;
export default PlayCircleBroken;