// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DocumentFilterBulkSvg from '@ant-design/icons-svg/lib/asn/DocumentFilterBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DocumentFilterBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DocumentFilterBulk: DocumentFilterBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DocumentFilterBulkSvg}></AntdIcon>;
};

DocumentFilterBulk.displayName = 'DocumentFilterBulk';
DocumentFilterBulk.inheritAttrs = false;
export default DocumentFilterBulk;