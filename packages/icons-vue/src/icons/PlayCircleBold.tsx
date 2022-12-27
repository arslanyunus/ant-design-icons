// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PlayCircleBoldSvg from '@ant-design/icons-svg/lib/asn/PlayCircleBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PlayCircleBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PlayCircleBold: PlayCircleBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PlayCircleBoldSvg}></AntdIcon>;
};

PlayCircleBold.displayName = 'PlayCircleBold';
PlayCircleBold.inheritAttrs = false;
export default PlayCircleBold;