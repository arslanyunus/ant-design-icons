// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import NoteTextTwoToneSvg from '@ant-design/icons-svg/lib/asn/NoteTextTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface NoteTextTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const NoteTextTwoTone: NoteTextTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={NoteTextTwoToneSvg}></AntdIcon>;
};

NoteTextTwoTone.displayName = 'NoteTextTwoTone';
NoteTextTwoTone.inheritAttrs = false;
export default NoteTextTwoTone;