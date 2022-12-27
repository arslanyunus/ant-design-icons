// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DocumentTextOutlineSvg from '@ant-design/icons-svg/lib/asn/DocumentTextOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DocumentTextOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DocumentTextOutline: DocumentTextOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DocumentTextOutlineSvg}></AntdIcon>;
};

DocumentTextOutline.displayName = 'DocumentTextOutline';
DocumentTextOutline.inheritAttrs = false;
export default DocumentTextOutline;