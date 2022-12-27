// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import NoteSquareBulkSvg from '@ant-design/icons-svg/lib/asn/NoteSquareBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface NoteSquareBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const NoteSquareBulk: NoteSquareBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={NoteSquareBulkSvg}></AntdIcon>;
};

NoteSquareBulk.displayName = 'NoteSquareBulk';
NoteSquareBulk.inheritAttrs = false;
export default NoteSquareBulk;