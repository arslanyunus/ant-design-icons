// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DocumentTextLinearSvg from '@ant-design/icons-svg/lib/asn/DocumentTextLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DocumentTextLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DocumentTextLinear: DocumentTextLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DocumentTextLinearSvg}></AntdIcon>;
};

DocumentTextLinear.displayName = 'DocumentTextLinear';
DocumentTextLinear.inheritAttrs = false;
export default DocumentTextLinear;