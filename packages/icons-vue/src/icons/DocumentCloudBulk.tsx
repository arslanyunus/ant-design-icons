// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DocumentCloudBulkSvg from '@ant-design/icons-svg/lib/asn/DocumentCloudBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DocumentCloudBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DocumentCloudBulk: DocumentCloudBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DocumentCloudBulkSvg}></AntdIcon>;
};

DocumentCloudBulk.displayName = 'DocumentCloudBulk';
DocumentCloudBulk.inheritAttrs = false;
export default DocumentCloudBulk;