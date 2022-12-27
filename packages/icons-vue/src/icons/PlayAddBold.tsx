// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PlayAddBoldSvg from '@ant-design/icons-svg/lib/asn/PlayAddBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PlayAddBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PlayAddBold: PlayAddBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PlayAddBoldSvg}></AntdIcon>;
};

PlayAddBold.displayName = 'PlayAddBold';
PlayAddBold.inheritAttrs = false;
export default PlayAddBold;