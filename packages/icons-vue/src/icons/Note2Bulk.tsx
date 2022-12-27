// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Note2BulkSvg from '@ant-design/icons-svg/lib/asn/Note2Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Note2BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Note2Bulk: Note2BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Note2BulkSvg}></AntdIcon>;
};

Note2Bulk.displayName = 'Note2Bulk';
Note2Bulk.inheritAttrs = false;
export default Note2Bulk;