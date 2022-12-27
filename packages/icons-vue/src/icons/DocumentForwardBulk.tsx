// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DocumentForwardBulkSvg from '@ant-design/icons-svg/lib/asn/DocumentForwardBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DocumentForwardBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DocumentForwardBulk: DocumentForwardBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DocumentForwardBulkSvg}></AntdIcon>;
};

DocumentForwardBulk.displayName = 'DocumentForwardBulk';
DocumentForwardBulk.inheritAttrs = false;
export default DocumentForwardBulk;