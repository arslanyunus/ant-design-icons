// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import NoteSquareBrokenSvg from '@ant-design/icons-svg/lib/asn/NoteSquareBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface NoteSquareBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const NoteSquareBroken: NoteSquareBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={NoteSquareBrokenSvg}></AntdIcon>;
};

NoteSquareBroken.displayName = 'NoteSquareBroken';
NoteSquareBroken.inheritAttrs = false;
export default NoteSquareBroken;