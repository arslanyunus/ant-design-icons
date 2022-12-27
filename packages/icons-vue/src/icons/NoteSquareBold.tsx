// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import NoteSquareBoldSvg from '@ant-design/icons-svg/lib/asn/NoteSquareBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface NoteSquareBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const NoteSquareBold: NoteSquareBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={NoteSquareBoldSvg}></AntdIcon>;
};

NoteSquareBold.displayName = 'NoteSquareBold';
NoteSquareBold.inheritAttrs = false;
export default NoteSquareBold;