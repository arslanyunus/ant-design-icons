// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DocumentBoldSvg from '@ant-design/icons-svg/lib/asn/DocumentBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DocumentBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DocumentBold: DocumentBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DocumentBoldSvg}></AntdIcon>;
};

DocumentBold.displayName = 'DocumentBold';
DocumentBold.inheritAttrs = false;
export default DocumentBold;