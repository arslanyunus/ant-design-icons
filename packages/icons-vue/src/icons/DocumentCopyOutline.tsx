// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DocumentCopyOutlineSvg from '@ant-design/icons-svg/lib/asn/DocumentCopyOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DocumentCopyOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DocumentCopyOutline: DocumentCopyOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DocumentCopyOutlineSvg}></AntdIcon>;
};

DocumentCopyOutline.displayName = 'DocumentCopyOutline';
DocumentCopyOutline.inheritAttrs = false;
export default DocumentCopyOutline;