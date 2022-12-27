// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import NoteSquareTwoToneSvg from '@ant-design/icons-svg/lib/asn/NoteSquareTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface NoteSquareTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const NoteSquareTwoTone: NoteSquareTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={NoteSquareTwoToneSvg}></AntdIcon>;
};

NoteSquareTwoTone.displayName = 'NoteSquareTwoTone';
NoteSquareTwoTone.inheritAttrs = false;
export default NoteSquareTwoTone;