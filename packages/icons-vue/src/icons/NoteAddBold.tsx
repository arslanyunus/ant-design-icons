// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import NoteAddBoldSvg from '@ant-design/icons-svg/lib/asn/NoteAddBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface NoteAddBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const NoteAddBold: NoteAddBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={NoteAddBoldSvg}></AntdIcon>;
};

NoteAddBold.displayName = 'NoteAddBold';
NoteAddBold.inheritAttrs = false;
export default NoteAddBold;