// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MusicCircleBoldSvg from '@ant-design/icons-svg/lib/asn/MusicCircleBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MusicCircleBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MusicCircleBold: MusicCircleBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MusicCircleBoldSvg}></AntdIcon>;
};

MusicCircleBold.displayName = 'MusicCircleBold';
MusicCircleBold.inheritAttrs = false;
export default MusicCircleBold;