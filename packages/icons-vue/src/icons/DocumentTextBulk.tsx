// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DocumentTextBulkSvg from '@ant-design/icons-svg/lib/asn/DocumentTextBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DocumentTextBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DocumentTextBulk: DocumentTextBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DocumentTextBulkSvg}></AntdIcon>;
};

DocumentTextBulk.displayName = 'DocumentTextBulk';
DocumentTextBulk.inheritAttrs = false;
export default DocumentTextBulk;