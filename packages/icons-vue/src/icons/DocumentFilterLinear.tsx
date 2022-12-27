// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DocumentFilterLinearSvg from '@ant-design/icons-svg/lib/asn/DocumentFilterLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DocumentFilterLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DocumentFilterLinear: DocumentFilterLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DocumentFilterLinearSvg}></AntdIcon>;
};

DocumentFilterLinear.displayName = 'DocumentFilterLinear';
DocumentFilterLinear.inheritAttrs = false;
export default DocumentFilterLinear;