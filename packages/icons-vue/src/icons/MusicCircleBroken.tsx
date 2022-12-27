// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MusicCircleBrokenSvg from '@ant-design/icons-svg/lib/asn/MusicCircleBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MusicCircleBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MusicCircleBroken: MusicCircleBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MusicCircleBrokenSvg}></AntdIcon>;
};

MusicCircleBroken.displayName = 'MusicCircleBroken';
MusicCircleBroken.inheritAttrs = false;
export default MusicCircleBroken;