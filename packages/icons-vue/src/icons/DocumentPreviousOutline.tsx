// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DocumentPreviousOutlineSvg from '@ant-design/icons-svg/lib/asn/DocumentPreviousOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DocumentPreviousOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DocumentPreviousOutline: DocumentPreviousOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DocumentPreviousOutlineSvg}></AntdIcon>;
};

DocumentPreviousOutline.displayName = 'DocumentPreviousOutline';
DocumentPreviousOutline.inheritAttrs = false;
export default DocumentPreviousOutline;