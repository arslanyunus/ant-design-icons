// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import NoteTextBulkSvg from '@ant-design/icons-svg/lib/asn/NoteTextBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface NoteTextBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const NoteTextBulk: NoteTextBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={NoteTextBulkSvg}></AntdIcon>;
};

NoteTextBulk.displayName = 'NoteTextBulk';
NoteTextBulk.inheritAttrs = false;
export default NoteTextBulk;