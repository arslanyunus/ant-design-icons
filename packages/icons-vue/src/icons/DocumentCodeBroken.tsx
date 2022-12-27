// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DocumentCodeBrokenSvg from '@ant-design/icons-svg/lib/asn/DocumentCodeBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DocumentCodeBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DocumentCodeBroken: DocumentCodeBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DocumentCodeBrokenSvg}></AntdIcon>;
};

DocumentCodeBroken.displayName = 'DocumentCodeBroken';
DocumentCodeBroken.inheritAttrs = false;
export default DocumentCodeBroken;