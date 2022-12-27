// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DocumentTextBoldSvg from '@ant-design/icons-svg/lib/asn/DocumentTextBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DocumentTextBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DocumentTextBold: DocumentTextBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DocumentTextBoldSvg}></AntdIcon>;
};

DocumentTextBold.displayName = 'DocumentTextBold';
DocumentTextBold.inheritAttrs = false;
export default DocumentTextBold;