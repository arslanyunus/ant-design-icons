// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PlayRemoveBrokenSvg from '@ant-design/icons-svg/lib/asn/PlayRemoveBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PlayRemoveBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PlayRemoveBroken: PlayRemoveBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PlayRemoveBrokenSvg}></AntdIcon>;
};

PlayRemoveBroken.displayName = 'PlayRemoveBroken';
PlayRemoveBroken.inheritAttrs = false;
export default PlayRemoveBroken;