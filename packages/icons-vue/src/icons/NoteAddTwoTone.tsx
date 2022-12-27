// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import NoteAddTwoToneSvg from '@ant-design/icons-svg/lib/asn/NoteAddTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface NoteAddTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const NoteAddTwoTone: NoteAddTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={NoteAddTwoToneSvg}></AntdIcon>;
};

NoteAddTwoTone.displayName = 'NoteAddTwoTone';
NoteAddTwoTone.inheritAttrs = false;
export default NoteAddTwoTone;