// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DocumentCodeBoldSvg from '@ant-design/icons-svg/lib/asn/DocumentCodeBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DocumentCodeBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DocumentCodeBold: DocumentCodeBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DocumentCodeBoldSvg}></AntdIcon>;
};

DocumentCodeBold.displayName = 'DocumentCodeBold';
DocumentCodeBold.inheritAttrs = false;
export default DocumentCodeBold;