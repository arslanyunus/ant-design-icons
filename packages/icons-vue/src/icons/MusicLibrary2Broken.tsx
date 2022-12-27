// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MusicLibrary2BrokenSvg from '@ant-design/icons-svg/lib/asn/MusicLibrary2Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MusicLibrary2BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MusicLibrary2Broken: MusicLibrary2BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MusicLibrary2BrokenSvg}></AntdIcon>;
};

MusicLibrary2Broken.displayName = 'MusicLibrary2Broken';
MusicLibrary2Broken.inheritAttrs = false;
export default MusicLibrary2Broken;