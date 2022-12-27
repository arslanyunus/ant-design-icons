// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DocumentPreviousBulkSvg from '@ant-design/icons-svg/lib/asn/DocumentPreviousBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DocumentPreviousBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DocumentPreviousBulk: DocumentPreviousBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DocumentPreviousBulkSvg}></AntdIcon>;
};

DocumentPreviousBulk.displayName = 'DocumentPreviousBulk';
DocumentPreviousBulk.inheritAttrs = false;
export default DocumentPreviousBulk;