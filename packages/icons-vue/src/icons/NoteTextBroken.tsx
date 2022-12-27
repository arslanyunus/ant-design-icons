// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import NoteTextBrokenSvg from '@ant-design/icons-svg/lib/asn/NoteTextBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface NoteTextBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const NoteTextBroken: NoteTextBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={NoteTextBrokenSvg}></AntdIcon>;
};

NoteTextBroken.displayName = 'NoteTextBroken';
NoteTextBroken.inheritAttrs = false;
export default NoteTextBroken;