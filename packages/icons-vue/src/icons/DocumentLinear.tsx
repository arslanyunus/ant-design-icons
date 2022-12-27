// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DocumentLinearSvg from '@ant-design/icons-svg/lib/asn/DocumentLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DocumentLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DocumentLinear: DocumentLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DocumentLinearSvg}></AntdIcon>;
};

DocumentLinear.displayName = 'DocumentLinear';
DocumentLinear.inheritAttrs = false;
export default DocumentLinear;