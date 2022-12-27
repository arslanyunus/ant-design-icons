// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PlayBoldSvg from '@ant-design/icons-svg/lib/asn/PlayBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PlayBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PlayBold: PlayBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PlayBoldSvg}></AntdIcon>;
};

PlayBold.displayName = 'PlayBold';
PlayBold.inheritAttrs = false;
export default PlayBold;