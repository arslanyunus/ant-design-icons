// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PlayCricleBrokenSvg from '@ant-design/icons-svg/lib/asn/PlayCricleBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PlayCricleBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PlayCricleBroken: PlayCricleBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PlayCricleBrokenSvg}></AntdIcon>;
};

PlayCricleBroken.displayName = 'PlayCricleBroken';
PlayCricleBroken.inheritAttrs = false;
export default PlayCricleBroken;