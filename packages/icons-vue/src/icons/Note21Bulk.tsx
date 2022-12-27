// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Note21BulkSvg from '@ant-design/icons-svg/lib/asn/Note21Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Note21BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Note21Bulk: Note21BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Note21BulkSvg}></AntdIcon>;
};

Note21Bulk.displayName = 'Note21Bulk';
Note21Bulk.inheritAttrs = false;
export default Note21Bulk;