// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DocumentOutlineSvg from '@ant-design/icons-svg/lib/asn/DocumentOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DocumentOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DocumentOutline: DocumentOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DocumentOutlineSvg}></AntdIcon>;
};

DocumentOutline.displayName = 'DocumentOutline';
DocumentOutline.inheritAttrs = false;
export default DocumentOutline;