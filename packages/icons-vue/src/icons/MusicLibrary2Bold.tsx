// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MusicLibrary2BoldSvg from '@ant-design/icons-svg/lib/asn/MusicLibrary2Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MusicLibrary2BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MusicLibrary2Bold: MusicLibrary2BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MusicLibrary2BoldSvg}></AntdIcon>;
};

MusicLibrary2Bold.displayName = 'MusicLibrary2Bold';
MusicLibrary2Bold.inheritAttrs = false;
export default MusicLibrary2Bold;