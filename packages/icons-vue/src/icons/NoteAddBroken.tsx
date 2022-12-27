// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import NoteAddBrokenSvg from '@ant-design/icons-svg/lib/asn/NoteAddBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface NoteAddBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const NoteAddBroken: NoteAddBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={NoteAddBrokenSvg}></AntdIcon>;
};

NoteAddBroken.displayName = 'NoteAddBroken';
NoteAddBroken.inheritAttrs = false;
export default NoteAddBroken;