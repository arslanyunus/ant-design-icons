// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DocumentForwardLinearSvg from '@ant-design/icons-svg/lib/asn/DocumentForwardLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DocumentForwardLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DocumentForwardLinear: DocumentForwardLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DocumentForwardLinearSvg}></AntdIcon>;
};

DocumentForwardLinear.displayName = 'DocumentForwardLinear';
DocumentForwardLinear.inheritAttrs = false;
export default DocumentForwardLinear;