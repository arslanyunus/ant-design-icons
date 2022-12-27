// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PlayCricleBoldSvg from '@ant-design/icons-svg/lib/asn/PlayCricleBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PlayCricleBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PlayCricleBold: PlayCricleBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PlayCricleBoldSvg}></AntdIcon>;
};

PlayCricleBold.displayName = 'PlayCricleBold';
PlayCricleBold.inheritAttrs = false;
export default PlayCricleBold;