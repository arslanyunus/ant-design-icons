// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PlayRemoveBoldSvg from '@ant-design/icons-svg/lib/asn/PlayRemoveBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PlayRemoveBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PlayRemoveBold: PlayRemoveBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PlayRemoveBoldSvg}></AntdIcon>;
};

PlayRemoveBold.displayName = 'PlayRemoveBold';
PlayRemoveBold.inheritAttrs = false;
export default PlayRemoveBold;