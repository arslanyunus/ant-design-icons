// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MusicLibrary2OutlineSvg from '@ant-design/icons-svg/lib/asn/MusicLibrary2Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MusicLibrary2OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MusicLibrary2Outline: MusicLibrary2OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MusicLibrary2OutlineSvg}></AntdIcon>;
};

MusicLibrary2Outline.displayName = 'MusicLibrary2Outline';
MusicLibrary2Outline.inheritAttrs = false;
export default MusicLibrary2Outline;