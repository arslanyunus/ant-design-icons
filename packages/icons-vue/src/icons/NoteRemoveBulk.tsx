// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import NoteRemoveBulkSvg from '@ant-design/icons-svg/lib/asn/NoteRemoveBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface NoteRemoveBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const NoteRemoveBulk: NoteRemoveBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={NoteRemoveBulkSvg}></AntdIcon>;
};

NoteRemoveBulk.displayName = 'NoteRemoveBulk';
NoteRemoveBulk.inheritAttrs = false;
export default NoteRemoveBulk;