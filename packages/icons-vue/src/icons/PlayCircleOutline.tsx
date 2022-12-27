// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PlayCircleOutlineSvg from '@ant-design/icons-svg/lib/asn/PlayCircleOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PlayCircleOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PlayCircleOutline: PlayCircleOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PlayCircleOutlineSvg}></AntdIcon>;
};

PlayCircleOutline.displayName = 'PlayCircleOutline';
PlayCircleOutline.inheritAttrs = false;
export default PlayCircleOutline;