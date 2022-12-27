// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DocumentNormalBulkSvg from '@ant-design/icons-svg/lib/asn/DocumentNormalBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DocumentNormalBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DocumentNormalBulk: DocumentNormalBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DocumentNormalBulkSvg}></AntdIcon>;
};

DocumentNormalBulk.displayName = 'DocumentNormalBulk';
DocumentNormalBulk.inheritAttrs = false;
export default DocumentNormalBulk;