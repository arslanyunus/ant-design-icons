// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DocumentSketchBulkSvg from '@ant-design/icons-svg/lib/asn/DocumentSketchBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DocumentSketchBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DocumentSketchBulk: DocumentSketchBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DocumentSketchBulkSvg}></AntdIcon>;
};

DocumentSketchBulk.displayName = 'DocumentSketchBulk';
DocumentSketchBulk.inheritAttrs = false;
export default DocumentSketchBulk;