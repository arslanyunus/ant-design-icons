// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DocumentCodeOutlineSvg from '@ant-design/icons-svg/lib/asn/DocumentCodeOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DocumentCodeOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DocumentCodeOutline: DocumentCodeOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DocumentCodeOutlineSvg}></AntdIcon>;
};

DocumentCodeOutline.displayName = 'DocumentCodeOutline';
DocumentCodeOutline.inheritAttrs = false;
export default DocumentCodeOutline;