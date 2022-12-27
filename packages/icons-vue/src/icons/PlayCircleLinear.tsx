// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PlayCircleLinearSvg from '@ant-design/icons-svg/lib/asn/PlayCircleLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PlayCircleLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PlayCircleLinear: PlayCircleLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PlayCircleLinearSvg}></AntdIcon>;
};

PlayCircleLinear.displayName = 'PlayCircleLinear';
PlayCircleLinear.inheritAttrs = false;
export default PlayCircleLinear;