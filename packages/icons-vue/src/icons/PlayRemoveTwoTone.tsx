// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PlayRemoveTwoToneSvg from '@ant-design/icons-svg/lib/asn/PlayRemoveTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PlayRemoveTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PlayRemoveTwoTone: PlayRemoveTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PlayRemoveTwoToneSvg}></AntdIcon>;
};

PlayRemoveTwoTone.displayName = 'PlayRemoveTwoTone';
PlayRemoveTwoTone.inheritAttrs = false;
export default PlayRemoveTwoTone;