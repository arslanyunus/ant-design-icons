// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Document1BulkSvg from '@ant-design/icons-svg/lib/asn/Document1Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Document1BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Document1Bulk: Document1BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Document1BulkSvg}></AntdIcon>;
};

Document1Bulk.displayName = 'Document1Bulk';
Document1Bulk.inheritAttrs = false;
export default Document1Bulk;