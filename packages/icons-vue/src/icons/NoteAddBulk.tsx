// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import NoteAddBulkSvg from '@ant-design/icons-svg/lib/asn/NoteAddBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface NoteAddBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const NoteAddBulk: NoteAddBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={NoteAddBulkSvg}></AntdIcon>;
};

NoteAddBulk.displayName = 'NoteAddBulk';
NoteAddBulk.inheritAttrs = false;
export default NoteAddBulk;