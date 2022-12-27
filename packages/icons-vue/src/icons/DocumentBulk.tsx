// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DocumentBulkSvg from '@ant-design/icons-svg/lib/asn/DocumentBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DocumentBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DocumentBulk: DocumentBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DocumentBulkSvg}></AntdIcon>;
};

DocumentBulk.displayName = 'DocumentBulk';
DocumentBulk.inheritAttrs = false;
export default DocumentBulk;