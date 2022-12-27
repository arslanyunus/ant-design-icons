// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PlayAddBrokenSvg from '@ant-design/icons-svg/lib/asn/PlayAddBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PlayAddBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PlayAddBroken: PlayAddBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PlayAddBrokenSvg}></AntdIcon>;
};

PlayAddBroken.displayName = 'PlayAddBroken';
PlayAddBroken.inheritAttrs = false;
export default PlayAddBroken;