// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import NoteRemoveTwoToneSvg from '@ant-design/icons-svg/lib/asn/NoteRemoveTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface NoteRemoveTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const NoteRemoveTwoTone: NoteRemoveTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={NoteRemoveTwoToneSvg}></AntdIcon>;
};

NoteRemoveTwoTone.displayName = 'NoteRemoveTwoTone';
NoteRemoveTwoTone.inheritAttrs = false;
export default NoteRemoveTwoTone;