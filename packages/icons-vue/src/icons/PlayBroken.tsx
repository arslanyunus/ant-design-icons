// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PlayBrokenSvg from '@ant-design/icons-svg/lib/asn/PlayBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PlayBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PlayBroken: PlayBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PlayBrokenSvg}></AntdIcon>;
};

PlayBroken.displayName = 'PlayBroken';
PlayBroken.inheritAttrs = false;
export default PlayBroken;