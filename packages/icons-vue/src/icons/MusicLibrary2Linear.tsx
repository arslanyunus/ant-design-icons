// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MusicLibrary2LinearSvg from '@ant-design/icons-svg/lib/asn/MusicLibrary2Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MusicLibrary2LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MusicLibrary2Linear: MusicLibrary2LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MusicLibrary2LinearSvg}></AntdIcon>;
};

MusicLibrary2Linear.displayName = 'MusicLibrary2Linear';
MusicLibrary2Linear.inheritAttrs = false;
export default MusicLibrary2Linear;