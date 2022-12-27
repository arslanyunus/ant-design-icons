// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Note1BulkSvg from '@ant-design/icons-svg/lib/asn/Note1Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Note1BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Note1Bulk: Note1BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Note1BulkSvg}></AntdIcon>;
};

Note1Bulk.displayName = 'Note1Bulk';
Note1Bulk.inheritAttrs = false;
export default Note1Bulk;