// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DocumentCopyBoldSvg from '@ant-design/icons-svg/lib/asn/DocumentCopyBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DocumentCopyBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DocumentCopyBold: DocumentCopyBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DocumentCopyBoldSvg}></AntdIcon>;
};

DocumentCopyBold.displayName = 'DocumentCopyBold';
DocumentCopyBold.inheritAttrs = false;
export default DocumentCopyBold;