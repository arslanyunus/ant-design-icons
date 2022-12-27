// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DocumentForwardOutlineSvg from '@ant-design/icons-svg/lib/asn/DocumentForwardOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DocumentForwardOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DocumentForwardOutline: DocumentForwardOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DocumentForwardOutlineSvg}></AntdIcon>;
};

DocumentForwardOutline.displayName = 'DocumentForwardOutline';
DocumentForwardOutline.inheritAttrs = false;
export default DocumentForwardOutline;