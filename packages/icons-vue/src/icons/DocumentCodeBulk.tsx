// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DocumentCodeBulkSvg from '@ant-design/icons-svg/lib/asn/DocumentCodeBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DocumentCodeBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DocumentCodeBulk: DocumentCodeBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DocumentCodeBulkSvg}></AntdIcon>;
};

DocumentCodeBulk.displayName = 'DocumentCodeBulk';
DocumentCodeBulk.inheritAttrs = false;
export default DocumentCodeBulk;